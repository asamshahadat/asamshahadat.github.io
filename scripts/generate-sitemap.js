// Builds public/sitemap.xml from the portfolio data so new projects are listed automatically.
// Runs before every `npm run build` (see "prebuild" in package.json).
// Projects come from the public data repo (same URLs as src/components/elements/usePortfolioData.js).
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://shahadatdev.com";
const DATA_URLS = [
    "https://asamshahadat.github.io/myPortfolioDataJson/portfolio.json",
    "https://raw.githubusercontent.com/asamshahadat/myPortfolioDataJson/main/portfolio.json",
];

const loadProjects = async () => {
    for (const url of DATA_URLS) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            console.warn(`sitemap: ${url} returned ${response.status}`);
        } catch (error) {
            console.warn(`sitemap: ${url} failed (${error.message})`);
        }
    }
    // A sitemap without project pages is better than a failed deploy
    console.warn("sitemap: portfolio data unavailable, writing static pages only");
    return [];
};

const main = async () => {
    const projects = await loadProjects();
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
};

main();
