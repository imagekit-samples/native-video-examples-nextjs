'use client';

import { useEffect, useRef } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";
//to provide quality control option in ABS Video
import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";

import { buildSrc } from "@imagekit/next";

export const VideoJS = (props) => {
    const placeholderRef = useRef(null);
    const playerRef = useRef(null)
    const { options, onReady } = props;
    
    const videoJsOptionsM3u8 = {
        controls: options.controls,
        autoplay: options.autoplay || false,
        width: options.width,
        muted: options.muted === false ? false : true,
        sources: [
          {
            src: buildSrc({
              urlEndpoint: options.urlEndpoint,
              src: `${options.videoPath}/ik-master.m3u8`,
              transformation: [{
                "streamingResolutions" : options.streamingResolutions
              }]
            }),
            type: 'application/x-mpegURL'
          },
        ],
        poster : buildSrc({
          urlEndpoint: options.urlEndpoint,
          src: `${options.videoPath}/ik-thumbnail.jpg`,
          transformation: [{
            "width": options.width,
            "height": options.height,
            "startOffset" : options.thumbnailStartOffset
          }]
        }),
        plugins: {
          httpSourceSelector:
          {
            default: 'auto'
          }
        }
    };

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be inside the component element for React 18 Strict Mode. 
            const placeholderEl = placeholderRef.current;
            
            let playerEl = document.createElement("video-js");
            playerEl.classList.add('vjs-big-play-centered');
            
            const videoElement = placeholderEl.appendChild(playerEl);

            
            const player = videojs(videoElement, videoJsOptionsM3u8, () => {
                onReady && onReady(player);
            });

            playerRef.current = player

            // Binding to the source selector plugin in Video.js
            player.httpSourceSelector();

            // You can update player in the `else` block here, for example:
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
        }

    }, [options, onReady]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {

        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return <div ref={placeholderRef}></div>;
};

export default VideoJS;