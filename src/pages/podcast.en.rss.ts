import { getAllPosts } from '../lib/api';
import { podcastXml } from '../lib/podcast';

export const get = async () => {
  const englishPosts = (await getAllPosts()).map((dual) => dual.en);
  return { body: podcastXml(englishPosts) };
};
