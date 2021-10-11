import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUpcomingMovies = createAsyncThunk(
  'get/upcomingmovie',
  async () => {
    const response = await axios.get(process.env.REACT_APP_UPCOMING_MOVIE_URL)
    return response
  },
)

const initialState = {
  videos: [],
  status: 'idle',
}
export const upcomingSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [getUpcomingMovies.pending]: (state) => {
      state.status = 'loading'
    },
    [getUpcomingMovies.fulfilled]: (state, action) => {
      state.status = 'success'

      state.videos = action.payload.data.results
    },
    [getUpcomingMovies.rejected]: (state) => {
      state.status = 'error'
    },
  },
})

export default upcomingSlice.reducer
