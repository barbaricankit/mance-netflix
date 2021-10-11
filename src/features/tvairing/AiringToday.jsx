import { useSelector } from 'react-redux'
import { ShowVideoList, getAiringTodaySeries } from '.'

const AiringToday = () => {
  const { series1Status, series1 } = useSelector((state) => state.tvairing)

  return (
    <ShowVideoList
      status={series1Status}
      videos={series1}
      func={getAiringTodaySeries}
      title={'Airing Today TV Series'}
    />
  )
}

export default AiringToday
