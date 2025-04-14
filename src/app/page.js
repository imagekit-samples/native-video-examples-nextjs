import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-w-200 mx-auto flex-1 mt-30 flex-col justify-center content-center">
      <h1 className='w-150 text-center text-3xl font-bold mb-5 mx-auto'>Native Video Experiences in React</h1>
      <p className="text-center w-150 mx-auto">Demonstration of different video streaming techniques in React + Next Apps with YouTube embed, HTML5 and React Video Player.</p>
      <Button asChild variant="outline" className="border-blue-500 text-blue-500 drop-shadow-none mt-10 w-100 mx-auto">
        <Link href="/demo/youtube-embed">Video with YouTube Embed</Link>
      </Button>
      <Button asChild variant="outline" className="border-blue-500 text-blue-500 drop-shadow-none mt-2 w-100 mx-auto">
        <Link href="/demo/html5-video-tag">Video with HTML5 Video Tag</Link>
      </Button>
      <Button asChild variant="outline" className="border-blue-500 text-blue-500 drop-shadow-none mt-2 w-100 mx-auto">
        <Link href="/demo/adaptive-streaming-videojs">Video with Adaptive Streaming using VideoJS</Link>
      </Button>
      <Button asChild variant="outline" className="border-blue-500 text-blue-500 drop-shadow-none mt-2 w-100 mx-auto">
        <Link href="/demo/vertical-videos">Vertical Videos + Adaptive Streaming using VideoJS</Link>
      </Button>
    </div>
  )
}
