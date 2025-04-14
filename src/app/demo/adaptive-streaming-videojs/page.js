'use client';

import VideoJS from "@/components/VideoJS"
import ArticleAuthorDetails from "@/components/ArticleAuthorDetails";
import ArticleContent from "@/components/ArticleContent";

export default function Home() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;
  const videoPath = "webinar-content/native-videos/space_shuttle_launch.mp4";

  const videoJSHLSOptions = {
    width: 800,
    height: 450,
    urlEndpoint: urlEndpoint,
    videoPath: videoPath,
    autoplay: false,
    controls: true,
    muted: false,
    streamingResolutions: "360_480_720_1080",
    thumbnailStartOffset: 22
  };

  return (
    <div className="flex max-w-200 flex-1 mt-20 flex-col justify-center content-center mx-auto">
      <h1 className='w-full text-3xl font-bold mb-5'>Adaptive streaming using VideoJS</h1>
      <div className="mb-10 h-112">
        <VideoJS options={videoJSHLSOptions} />
      </div>
      <ArticleAuthorDetails author="John Doe" date="July 4, 2025" />
      <ArticleContent />
    </div>
  )
}
