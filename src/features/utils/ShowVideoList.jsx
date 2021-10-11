import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { VideoListHeader, VideoRow } from '.'

const ShowVideoList = ({ status, videos, func, title }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (status === 'idle') {
      dispatch(func())
    }
  }, [status, dispatch, func])

  return (
    <>
      <VideoListHeader title={title} />
      <div className="relative">
        <VideoRow videos={videos} status={status} />
      </div>
    </>
  )
}

export default ShowVideoList
