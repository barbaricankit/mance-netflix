import { useRef } from 'react'
import { ForwardArrow, BackArrow, VideoList, Loader } from '.'

const VideoRow = ({ videos, status }) => {
  const videoRef = useRef(null)
  const scrollList = (direction) => {
    if (direction === 'Next') {
      videoRef.current.scrollLeft =
        videoRef.current.scrollLeft + window.innerWidth
    } else {
      videoRef.current.scrollLeft =
        videoRef.current.scrollLeft - window.innerWidth
    }
  }

  return (
    <div className="relative video">
      <Loader status={status} />
      <BackArrow func={scrollList} />
      <div
        className="flex p-8 pt-4 mr-0 overflow-x-auto scroll-transition "
        ref={videoRef}
      >
        <VideoList videos={videos} />
      </div>
      <ForwardArrow func={scrollList} />
    </div>
  )
}

export default VideoRow
