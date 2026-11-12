import type { APIRoute } from 'astro';
import { isPreview, path } from '../config';

/** Production allows crawling; the GitHub Pages preview blocks it (pages also carry noindex). */
export const GET: APIRoute = ({ site }) => {
  const body = isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /gracias\n\nSitemap: ${new URL(path('/sitemap-index.xml'), site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
