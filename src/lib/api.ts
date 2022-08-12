import type { Post } from '../types';
import { bucketSlug, readKey } from './config';

export async function getAllPosts(): Promise<Post[]> {
  const endpoint = `https://api.cosmicjs.com/v2/buckets`;
  const query = encodeURIComponent(`{"type":"posts"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs = await response.json();
  const allPosts: Array<Post> = objs.objects;
  return allPosts;
}
