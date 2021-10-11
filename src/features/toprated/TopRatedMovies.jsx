import { useSelector } from 'react-redux'
import { ShowVideoList, getTopratedMovies } from '.'

const TopRatedMovies = () => {
  const { moviesStatus, movies } = useSelector((state) => state.topRated)

  return (
    <ShowVideoList
      status={moviesStatus}
      videos={movies}
      func={getTopratedMovies}
      title={'Top Rated TV Series'}
    />
  )
}

export default TopRatedMovies
