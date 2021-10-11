import { useSelector } from 'react-redux'
import { ShowVideoList, getTopratedTVSeries } from '.'

const TopRatedTVSerials = () => {
  const { tvStatus, series } = useSelector((state) => state.topRated)

  return (
    <ShowVideoList
      status={tvStatus}
      videos={series}
      func={getTopratedTVSeries}
      title={'Top Rated TV Series'}
    />
  )
}

export default TopRatedTVSerials
