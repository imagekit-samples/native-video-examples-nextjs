'use client';

import React from 'react';
import ReelsThumbnail from '@/components/ReelsThumbnail';
import VideoJS from '@/components/VideoJS';
import videoList from '@/data/videoList';
import { IoCloseOutline } from "react-icons/io5";

const VerticalVideosPage = () => {
    const urlEndpoint = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;
    const [selectedVideo, setSelectedVideo] = React.useState(null);

    const handleThumbnailClick = (videoPath) => {
        const videoJSHLSOptions = {
            width: window.innerHeight * (9/16),
            height: window.innerHeight,
            urlEndpoint: urlEndpoint,
            videoPath: videoPath,
            autoplay: true,
            controls: false,
            streamingResolutions: "480_720_1080",
            thumbnailStartOffset: 22,
        };
        setSelectedVideo(videoJSHLSOptions);
    };

    return (
        <div className=" max-w-200 mt-20 container mx-auto p-4">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-0">
                {videoList.map((video, index) => (
                    <ReelsThumbnail
                        key={index}
                        urlEndpoint={urlEndpoint}
                        video={video}
                        onClick={handleThumbnailClick}
                    />
                ))}
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 z-2 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="relative">
                        <button
                            className="fixed z-4 top-0 right-0 m-4 text-white"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <IoCloseOutline size={24} />
                        </button>
                        <VideoJS options={selectedVideo} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerticalVideosPage;
