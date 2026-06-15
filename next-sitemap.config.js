/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.chilkurfarmhouse.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/farmhouse-in-chilkur", changefreq: "weekly", priority: 0.9 },
    { loc: "/farmhouse-near-hyderabad", changefreq: "weekly", priority: 0.9 },
    { loc: "/farmhouse-for-rent-in-chilkur", changefreq: "weekly", priority: 0.9 },
    { loc: "/weekend-getaway-near-hyderabad", changefreq: "weekly", priority: 0.9 },
    { loc: "/stay-near-chilkur-balaji-temple", changefreq: "weekly", priority: 0.9 },
    { loc: "/booking", changefreq: "weekly", priority: 0.8 },
    { loc: "/gallery", changefreq: "monthly", priority: 0.7 },
    { loc: "/attractions", changefreq: "monthly", priority: 0.7 },
    { loc: "/contact", changefreq: "monthly", priority: 0.7 },
  ],
};
