// Edge entry point: canonicalise the host, then serve the static Astro build.
const CANONICAL_HOST = 'www.kiape.co';
const REDIRECT_HOSTS = new Set(['kiape.co']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRECT_HOSTS.has(url.hostname)) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
