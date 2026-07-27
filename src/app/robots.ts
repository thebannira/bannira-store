import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'dev';

  if (isDev) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bannira.com/sitemap.xml',
  };
}