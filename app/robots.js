export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://abdurrahmanabid.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

