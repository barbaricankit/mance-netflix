import { useSelector } from 'react-redux'
import { ShowVideoList, getPopularTVSeries } from '.'

const PopularTVSerials = () => {
  const { tvStatus, series } = useSelector((state) => state.popular)

  return (
    <ShowVideoList
      status={tvStatus}
      videos={series}
      func={getPopularTVSeries}
      title={'Popular TV Series'}
    />
  )
}

export default PopularTVSerials
