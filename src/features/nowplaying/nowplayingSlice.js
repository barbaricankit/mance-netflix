import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getNowPlayingMovies = createAsyncThunk(
  'get/nowplayingmovie',
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_NOW_PLAYING_MOVIE_URL,
    )
    return response
  },
)

const initialState = {
  videos: [],
  status: 'idle',
}
export const nowplayingSlice = createSlice({
  name: 'nowplayingMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [getNowPlayingMovies.pending]: (state) => {
      state.status = 'loading'
    },
    [getNowPlayingMovies.fulfilled]: (state, action) => {
      state.status = 'success'

      state.videos = action.payload.data.results
    },
    [getNowPlayingMovies.rejected]: (state) => {
      state.status = 'error'
    },
  },
})

export default nowplayingSlice.reducer
