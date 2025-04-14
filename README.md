# Native Video Experiences in Next.js using ImageKit
This project demonstrates different methods of creating native video experiences on websites.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

**Update the correct URL endpoint**

Update the .env file with the default URL endpoint of your ImageKit account. You can find this in your ImageKit dashboard. Read more about [URL endpoints for file delivery](https://imagekit.io/docs/integration/connect-external-storage#url-endpoints). 


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Project Features

This project demonstrates various ways of embedding videos on the web and creating native video experiences. You can start by visiting `http://localhost:3000/`

### 1. YouTube Embed
- **Route:** `/demo/youtube-embed`
- **Description:** This page showcases how to embed YouTube videos within a Next.js application.

### 2. HTML5 Video Player
- **Route:** `/demo/html5-video-tag`
- **Description:** This page demonstrates the use of a native HTML5 video tag, enhanced with the ImageKit's video optimizations and transformations using the ImageKit NextJS Video Component for optimized video delivery.

### 3. Adaptive Bitrate Streaming
- **Route:** `/demo/adaptive-streaming-videojs`
- **Description:** This page uses adaptive bitrate streaming using VideoJS player combined with ImageKit's real-time ABS transformationss, allowing for smooth video playback across varying network conditions.

### 4. Vertical Reels-like Interface
- **Route:** `/demo/vertical-videos`
- **Description:** This page demonstrates a vertical reels-like video interface, utilizing VideoJS for adaptive streaming and ImageKit for creating video thumbnails, short trailers and HLS streaming to deliver a seamless viewing experience.
