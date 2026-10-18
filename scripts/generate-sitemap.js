// Builds public/sitemap.xml from the portfolio data so new projects are listed automatically.
// Runs before every `npm run build` (see "prebuild" in package.json).
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://shahadatdev.com";
const projects = require("../src/data/portfolioData.json");

const paths = ["/", "/portfolio", ...projects.map((project) => `/portfolio/${project.id}`)];

const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((urlPath) => `  <url><loc>${SITE_URL}${urlPath}</loc></url>`),
    "</urlset>",
    "",
].join("\n");

fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml);
console.log(`sitemap.xml written with ${paths.length} URLs`);
