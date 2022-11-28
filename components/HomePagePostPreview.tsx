import React from 'react';
import striptags from 'striptags';
import { relativeTime } from '../lib/dates';
import { DualPost } from '../lib/types';

interface Props {
  post: DualPost;
}

const HomePagePostPreview: React.FC<Props> = ({ post }) => {
  return (
    <div className="p-3 sm:p-6 rounded-2xl flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">{post.en.title}</h2>
        <h3 className="text-white text-opacity-70 font-medium shrink-0">
          {relativeTime(post.publishedAt)}
        </h3>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: striptags(post.en.content).substring(0, 400).trim() + '...',
        }}
        className="text-white text-opacity-80 sm:text-lg mt-2 mb-4"
      ></p>
      <a
        className="flex justify-center items-center self-start space-x-2 transition duration-100 text-sky-100 hover:text-sky-300 cursor-pointer py-2"
        href={`/posts/${post.en.slug}`}
      >
        <span>Read post</span>
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default HomePagePostPreview;
