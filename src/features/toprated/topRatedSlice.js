import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTopratedMovies = createAsyncThunk(
  'get/topratedmovie',
  async () => {
    const response = await axios.get(process.env.REACT_APP_TOP_RATED_MOVIE_URL)
    return response
  },
)
export const getTopratedTVSeries = createAsyncThunk(
  'get/topratedtvseries',
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_TOP_RATED_TV_SERIES_URL,
    )
    return response
  },
)

const initialState = {
  movies: [],
  series: [],
  moviesStatus: 'idle',
  tvStatus: 'idle',
}
export const topratedSlice = createSlice({
  name: 'toprated',
  initialState,
  reducers: {},
  extraReducers: {
    [getTopratedMovies.pending]: (state) => {
      state.moviesStatus = 'loading'
    },
    [getTopratedMovies.fulfilled]: (state, action) => {
      state.moviesStatus = 'success'
      state.movies = action.payload.data.results
    },
    [getTopratedMovies.rejected]: (state) => {
      state.moviesStatus = 'error'
    },
    [getTopratedTVSeries.pending]: (state) => {
      state.tvStatus = 'loading'
    },
    [getTopratedTVSeries.fulfilled]: (state, action) => {
      state.tvStatus = 'success'
      state.series = action.payload.data.results
    },
    [getTopratedTVSeries.rejected]: (state) => {
      state.tvStatus = 'error'
    },
  },
})

export default topratedSlice.reducer
