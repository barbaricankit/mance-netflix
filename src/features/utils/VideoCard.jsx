const VideoCard = ({ video }) => {
  return (
    <div className="m-0.5 transform  video-card cursor-pointer">
      <img
        className={`rounded-md h-306 `}
        src={`https://image.tmdb.org/t/p/w300${video.poster_path}`}
        alt={video.name}
      />
    </div>
  )
}

export default VideoCard
