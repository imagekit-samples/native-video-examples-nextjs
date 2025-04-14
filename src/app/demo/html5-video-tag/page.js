'use client';

import ArticleAuthorDetails from "@/components/ArticleAuthorDetails";
import ArticleContent from "@/components/ArticleContent";
import { Video, buildSrc } from '@imagekit/next';

//Video path to test S3 external origin
const s3Video = "/videodemo/space-shuttle-s3.mp4"

//Video path to test video uploaded in the Media Library
const mediaLibraryVideo = "webinar-content/native-videos/space_shuttle_launch.mp4";

export default function Home() {
  //URL Endpoint in ImageKit for loading videos
  const ImageKitURLEndpoint = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;
  console.log(ImageKitURLEndpoint);
  return (
    <div className="flex max-w-200 flex-1 mt-20 flex-col justify-center content-center mx-auto">
      <h1 className='w-full text-3xl font-bold mb-5'>Video using HTML5 video tag</h1>
      <div className="mb-10">
        <Video
          urlEndpoint={ImageKitURLEndpoint}
          src={mediaLibraryVideo}
          controls
          transformation={[{
            width: 800,
            height: 450
          }]}
          poster={buildSrc({
            urlEndpoint: ImageKitURLEndpoint,
            src: `${mediaLibraryVideo}/ik-thumbnail.jpg`,
            transformation: [{ width: 800, height: 450, so: 22 }]
          })}
        />
      </div>
      <ArticleAuthorDetails author="John Doe" date="July 4, 2025" />
      <ArticleContent />
    </div>
  )
}
