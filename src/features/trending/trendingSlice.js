import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTrendingMovies = createAsyncThunk(
  'get/trendingmovie',
  async () => {
    const response = await axios.get(process.env.REACT_APP_TRENDING_MOVIE_URL)
    return response
  },
)

const initialState = {
  videos: [],
  status: 'idle',
}
export const trendingSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [getTrendingMovies.pending]: (state) => {
      state.status = 'loading'
    },
    [getTrendingMovies.fulfilled]: (state, action) => {
      state.status = 'success'

      state.videos = action.payload.data.results
    },
    [getTrendingMovies.rejected]: (state) => {
      state.status = 'error'
    },
  },
})

export default trendingSlice.reducer
