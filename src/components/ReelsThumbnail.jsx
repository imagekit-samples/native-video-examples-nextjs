import React from 'react';
import { FaEye, FaComment } from 'react-icons/fa';
import { Video, buildSrc } from '@imagekit/next';

const ReelsThumbnail = ({ video, onClick, urlEndpoint }) => {
  const { videoUrl, views, comments } = video;

  return (
    <div className="p-2">
      <div className="relative cursor-pointer min-h-90" onClick={() => onClick(videoUrl)}>
        <Video
          src={videoUrl}
          urlEndpoint={urlEndpoint}
          transformation={[{ width: 400, height: 600, duration: 5, startOffset: 2 }]}
          className="w-full h-auto"
          muted
          poster={buildSrc({
            urlEndpoint: `${urlEndpoint}`,
            src: `${videoUrl}/ik-thumbnail.jpg`,
            transformation: [{ width: 400, height: 600, startOffset: 2 }]
          })}
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 flex justify-between items-center text-sm">
          <span className="flex items-center"><FaEye className="mr-1" /> {formatNumber(views)}</span>
          <span className="flex items-center"><FaComment className="mr-1" /> {formatNumber(comments)}</span>
        </div>
      </div>
    </div>
  );
};

export default ReelsThumbnail;

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};
