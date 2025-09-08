import fs from 'fs';
import path from 'path';
import createClient from '@sanity/client';

const client = createClient({
  projectId: 'ge0xykry',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function generateSitemap() {
  try {
    const staticRoutes = [
      '/',
      '/about',
      '/mt-kenya',
      '/kilimanjaro',
      '/safaris',
      '/blog',
      '/contact',
      '/expeditions',
    ];

    // Fetch posts from Sanity
    const posts = await client.fetch(`*[_type == "post"]{slug, publishedAt}`) || [];

    const domain = (process.env.SITE_URL || 'https://wilderness-expedition.com').replace(/\/$/, '');
    const urls = [];

    staticRoutes.forEach((route) => {
      urls.push({ loc: `${domain}${route}`, lastmod: new Date().toISOString() });
    });

    posts.forEach((post) => {
      if (post?.slug?.current) {
        urls.push({ loc: `${domain}/blog/${post.slug.current}`, lastmod: post.publishedAt || new Date().toISOString() });
      }
    });

    const sitemapEntries = urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      sitemapEntries +
      `\n</urlset>`;

    const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outPath, sitemap, 'utf8');
    console.log(`Sitemap written to ${outPath} (${urls.length} URLs)`);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    process.exit(1);
  }
}

generateSitemap();
