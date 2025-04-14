const YoutubeVideo = ({ src, width, height }) => {
  return (
    <div className="youtube-video">
      <iframe
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
