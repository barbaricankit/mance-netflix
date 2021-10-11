import { configureStore } from '@reduxjs/toolkit'
import upcomingReducer from '../features/upcoming/upcomingSlice'
import tvairingReducer from '../features/tvairing/tvairingSlice'
import popularReducer from '../features/popular/popularSlice'
import trendingReducer from '../features/trending/trendingSlice'
import topRatedReducer from '../features/toprated/topRatedSlice'
import nowplayingReducer from '../features/nowplaying/nowplayingSlice'

export const store = configureStore({
  reducer: {
    upcoming: upcomingReducer,
    tvairing: tvairingReducer,
    popular: popularReducer,
    trending: trendingReducer,
    topRated: topRatedReducer,
    nowplaying: nowplayingReducer,
  },
})
