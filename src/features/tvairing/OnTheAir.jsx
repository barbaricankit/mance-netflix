import { useSelector } from 'react-redux'
import { ShowVideoList, getOnTheAirSeries } from '.'

const OnTheAir = () => {
  const { series2Status, series2 } = useSelector((state) => state.tvairing)

  return (
    <ShowVideoList
      status={series2Status}
      videos={series2}
      func={getOnTheAirSeries}
      title={'On The Air TV Series'}
    />
  )
}

export default OnTheAir
