import React from 'react';
import { Image } from '@imagekit/next';

const ArticleAuthorDetails = ({ author, date }) => {
  return (
    <div className="w-full bg-gray-100 p-4 mb-10">
      <div className="flex items-center">
        <Image
          urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}
          src="/docs_images/example_image.jpg"
          alt="Profile"
          width={120}
          height={120}
          transformation={[{width: 120, height: 120}]}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-md font-semibold mb-0">{author}</p>
          <p className="text-xs text-gray-600 mb-0">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthorDetails;
