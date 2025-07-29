/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.rgcreationsnepal.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/api/*'],
};