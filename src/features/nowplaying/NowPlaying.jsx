import { useSelector } from 'react-redux'
import { ShowVideoList, getNowPlayingMovies } from '.'

const NowPlayingMovies = () => {
  const { status, videos } = useSelector((state) => state.nowplaying)

  return (
    <ShowVideoList
      status={status}
      videos={videos}
      func={getNowPlayingMovies}
      title={'Now Playing'}
    />
  )
}

export default NowPlayingMovies
