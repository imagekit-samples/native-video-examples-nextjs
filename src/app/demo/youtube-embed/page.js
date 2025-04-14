import ArticleAuthorDetails from "@/components/ArticleAuthorDetails";
import ArticleContent from "@/components/ArticleContent";
import YoutubeVideo from "@/components/YoutubeVideo";

export default function Home() {
  return (
    <div className="flex max-w-200 flex-1 mt-20 flex-col justify-center content-center mx-auto">
      <h1 className='w-full text-3xl font-bold mb-5'>Video using Youtube Embed</h1>
      <div className="mb-10">
        <YoutubeVideo src="https://www.youtube.com/embed/yzyJ1cK4MNY?si=E8rr8inQoBdfn71d" width="800" height="450" />
      </div>
      <ArticleAuthorDetails author="John Doe" date="July 4, 2025" />
      <ArticleContent />
    </div>
  )
}
