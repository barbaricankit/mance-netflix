import { VideoCard } from '.'

const VideoList = ({ videos }) => {
  return videos?.map((video) => <VideoCard video={video} key={video.id} />)
}

export default VideoList
