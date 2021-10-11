import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPopularMovies = createAsyncThunk(
  'get/popularmovie',
  async () => {
    const response = await axios.get(process.env.REACT_APP_POPULAR_MOVIE_URL)
    return response
  },
)

export const getPopularTVSeries = createAsyncThunk(
  'get/populartvseries',
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_POPULAR_TV_SERIES_URL,
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
export const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: {
    [getPopularMovies.pending]: (state) => {
      state.moviesStatus = 'loading'
    },
    [getPopularMovies.fulfilled]: (state, action) => {
      state.moviesStatus = 'success'
      state.movies = action.payload.data.results
    },
    [getPopularMovies.rejected]: (state) => {
      state.moviesStatus = 'error'
    },
    [getPopularTVSeries.pending]: (state) => {
      state.tvStatus = 'loading'
    },
    [getPopularTVSeries.fulfilled]: (state, action) => {
      state.tvStatus = 'success'
      state.series = action.payload.data.results
    },
    [getPopularTVSeries.rejected]: (state) => {
      state.tvStatus = 'error'
    },
  },
})

export default popularSlice.reducer
