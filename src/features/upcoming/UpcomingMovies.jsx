import { useSelector } from 'react-redux'
import { ShowVideoList, getUpcomingMovies } from '.'

const UpcomingMovies = () => {
  const { status, videos } = useSelector((state) => state.upcoming)

  return (
    <ShowVideoList
      status={status}
      videos={videos}
      func={getUpcomingMovies}
      title={'Upcoming Movies'}
    />
  )
}

export default UpcomingMovies
