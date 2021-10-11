import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAiringTodaySeries = createAsyncThunk(
  'get/tvAiringtoday',
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_AIRING_TODAY_TV_SERIES_URL,
    )
    return response
  },
)

export const getOnTheAirSeries = createAsyncThunk('get/ontheair', async () => {
  const response = await axios.get(
    process.env.REACT_APP_ON_THE_AIR_TV_SERIES_URL,
  )
  return response
})
const initialState = {
  series1: [],
  series2: [],
  series1Status: 'idle',
  series2Status: 'idle',
}
export const tvAiringSlice = createSlice({
  name: 'tvAiring',
  initialState,
  reducers: {},
  extraReducers: {
    [getAiringTodaySeries.pending]: (state) => {
      state.series1Status = 'loading'
    },
    [getAiringTodaySeries.fulfilled]: (state, action) => {
      state.series1Status = 'success'
      state.series1 = action.payload.data.results
    },
    [getAiringTodaySeries.rejected]: (state) => {
      state.series1Status = 'error'
    },
    [getOnTheAirSeries.pending]: (state) => {
      state.series2Status = 'loading'
    },
    [getOnTheAirSeries.fulfilled]: (state, action) => {
      state.series2Status = 'success'
      state.series2 = action.payload.data.results
    },
    [getOnTheAirSeries.rejected]: (state) => {
      state.series2Status = 'error'
    },
  },
})

export default tvAiringSlice.reducer
