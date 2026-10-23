// Portfolio pages are shared on Upwork, which doesn't allow off-platform contact details,
// so contact info and social links are left out of these routes entirely
export const isPortfolioRoute = (pathname) => pathname === "/portfolio" || pathname.startsWith("/portfolio/");
