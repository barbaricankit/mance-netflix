import { NowPlayingMovies } from '../nowplaying'
import { PopularMovies } from '../popular'
import { TopRatedMovies } from '../toprated'
import { TrendingMovies } from '../trending'
import { UpcomingMovies } from '../upcoming'

const Movies = () => {
  return (
    <>
      <NowPlayingMovies />
      <PopularMovies />
      <TopRatedMovies />
      <TrendingMovies />
      <UpcomingMovies />
    </>
  )
}

export default Movies
