import { PopularTVSerials } from '../popular'
import { TopRatedTVSerials } from '../toprated'
import { AiringToday, OnTheAir } from '../tvairing'

const TVSeries = () => {
  return (
    <>
      <OnTheAir />
      <PopularTVSerials />
      <TopRatedTVSerials />
      <AiringToday />
    </>
  )
}

export default TVSeries
