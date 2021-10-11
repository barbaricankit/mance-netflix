import { useSelector } from 'react-redux'
import { ShowVideoList, getPopularMovies } from '.'

const PopularMovies = () => {
  const { moviesStatus, movies } = useSelector((state) => state.popular)

  return (
    <ShowVideoList
      status={moviesStatus}
      videos={movies}
      func={getPopularMovies}
      title={'Popular Movies'}
    />
  )
}

export default PopularMovies
