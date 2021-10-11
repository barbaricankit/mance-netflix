import { useSelector } from 'react-redux'
import { ShowVideoList, getTrendingMovies } from '.'

const TrendingMovies = () => {
  const { status, videos } = useSelector((state) => state.trending)

  return (
    <ShowVideoList
      status={status}
      videos={videos}
      func={getTrendingMovies}
      title={'Trending Movies'}
    />
  )
}

export default TrendingMovies
