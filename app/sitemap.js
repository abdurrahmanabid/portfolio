export default function sitemap() {
  const baseUrl = 'https://abdurrahmanabid.vercel.app';

  // Only canonical pages — do not include hash fragments (#...)
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add more canonical routes if/when they exist, e.g. `${baseUrl}/blog`
  ];

  return routes;
}

