import { getAllPosts } from '../lib/api';
import { podcastXml } from '../lib/podcast';

export const get = async () => {
  const spanishPosts = (await getAllPosts()).map((dual) => dual.es);
  return { body: podcastXml(spanishPosts) };
};
