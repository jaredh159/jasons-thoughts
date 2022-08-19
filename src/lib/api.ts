import type { DualPost, ApiPost } from '../types';
import { bucketSlug, readKey } from './config';

export async function getAllPosts(): Promise<DualPost[]> {
  const endpoint = `https://api.cosmicjs.com/v2/buckets`;
  const type = import.meta.env.MODE === 'development' ? 'posts' : 'posts';
  const query = encodeURIComponent(`{"type":"${type}"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs = await response.json();
  const allApiPosts: Array<ApiPost> = objs.objects;
  return allApiPosts.map(toDual);
}

function toDual(api: ApiPost): DualPost {
  return {
    en: {
      id: `${api.id}-en`,
      slug: api.slug,
      title: api.title,
      content: api.content,
      soundcloudId: api.metadata.soundcloud_id,
      lang: `en`,
      createdAt: new Date(api.created_at),
      modifiedAt: new Date(api.modified_at),
      publishedAt: new Date(api.published_at),
    },
    es: {
      id: `${api.id}-es`,
      slug: api.metadata.spanish_slug,
      title: api.metadata.spanish_title,
      content: api.metadata.spanish_content,
      soundcloudId: api.metadata.spanish_soundcloud_id,
      lang: `es`,
      createdAt: new Date(api.created_at),
      modifiedAt: new Date(api.modified_at),
      publishedAt: new Date(api.published_at),
    },
    createdAt: new Date(api.created_at),
    modifiedAt: new Date(api.modified_at),
    publishedAt: new Date(api.published_at),
  };
}
