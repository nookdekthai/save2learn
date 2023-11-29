import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.learning-destiny.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.learning-destiny.com/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://www.learning-destiny.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.learning-destiny.com/ebook',
      lastModified: new Date(),
    },
  ]
}