// Writes contact-free copies of build/index.html for the portfolio routes, so their page source
// and link previews carry no email or social links (they're shared on Upwork, see src/components/elements/routes.js).
// Runs after every `npm run build` (see "postbuild" in package.json).
// Project paths come from the sitemap written by generate-sitemap.js, so the data isn't fetched twice.
// Both hosts serve "/portfolio/12" from "portfolio/12.html"; projects added after a deploy fall back to
// index.html, where usePageMeta removes the same tags at runtime.
const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.join(__dirname, "..", "build");

const stripContactTags = (html) => html
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
    .replace(/<meta name="twitter:site"[^>]*>/g, "");

const main = () => {
    const html = stripContactTags(fs.readFileSync(path.join(BUILD_DIR, "index.html"), "utf8"));
    const sitemap = fs.readFileSync(path.join(BUILD_DIR, "sitemap.xml"), "utf8");
    const projectPaths = [...sitemap.matchAll(/<loc>[^<]*?(\/portfolio\/[^<]+)<\/loc>/g)].map((match) => match[1]);

    const files = ["portfolio.html", "portfolio/index.html", ...projectPaths.map((urlPath) => `${urlPath.slice(1)}.html`)];
    files.forEach((file) => {
        const target = path.join(BUILD_DIR, file);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html);
    });
    console.log(`portfolio pages: ${files.length} contact-free HTML files written`);
};

main();
