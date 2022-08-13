export type ApiPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  modified_at: string;
  published_at: string;
  metadata: {
    soundcloud_id: number;
    spanish_title: string;
    spanish_slug: string;
    spanish_content: string;
    spanish_soundcloud_id: number;
  };
};

export type Lang = 'en' | 'es';

export type Post<L extends Lang> = {
  id: string;
  slug: string;
  title: string;
  content: string;
  soundcloudId: number;
  lang: L;
  createdAt: Date;
  modifiedAt: Date;
  publishedAt: Date;
};

export type DualPost = {
  en: Post<'en'>;
  es: Post<'es'>;
  createdAt: Date;
  modifiedAt: Date;
  publishedAt: Date;
};
