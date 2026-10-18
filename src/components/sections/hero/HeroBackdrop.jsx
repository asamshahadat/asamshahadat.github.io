// Decorative hero backdrop: neon waves, soft bokeh lights and dot patterns.

// Soft out-of-focus lights scattered over the backdrop
const bokehLights = [
    { cx: 190, cy: 170, r: 70, tone: 'cyan' },
    { cx: 1290, cy: 560, r: 110, tone: 'blue' },
    { cx: 640, cy: 110, r: 34, tone: 'magenta' },
    { cx: 1010, cy: 650, r: 46, tone: 'cyan' },
    { cx: 1390, cy: 70, r: 26, tone: 'white' },
];

const HeroBackdrop = () => (
    <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-horizon" />

        <svg className="hero-waves" viewBox="0 0 1440 900" preserveAspectRatio="xMaxYMin slice">
            <defs>
                <linearGradient id="wave-main" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: "var(--wave-violet)" }} />
                    <stop offset="0.55" style={{ stopColor: "var(--wave-magenta)" }} />
                    <stop offset="1" style={{ stopColor: "var(--wave-orange)" }} />
                </linearGradient>
                <linearGradient id="wave-ribbon" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" style={{ stopColor: "var(--wave-pink)" }} />
                    <stop offset="0.6" style={{ stopColor: "var(--wave-orange)" }} />
                    <stop offset="1" style={{ stopColor: "var(--wave-amber)" }} />
                </linearGradient>
                <linearGradient id="wave-deep" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: "var(--wave-indigo)" }} />
                    <stop offset="1" style={{ stopColor: "var(--wave-violet)" }} />
                </linearGradient>
                {['cyan', 'blue', 'magenta', 'white'].map((tone) => (
                    <radialGradient key={tone} id={`bokeh-${tone}`}>
                        <stop offset="0" style={{ stopColor: `var(--bokeh-${tone})` }} />
                        <stop offset="1" style={{ stopColor: `var(--bokeh-${tone})`, stopOpacity: 0 }} />
                    </radialGradient>
                ))}
                <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="22" />
                </filter>
            </defs>

            {/* Big flowing swoosh, top right */}
            <g className="wave wave--a">
                <path d="M760 -40C900 80 960 230 1130 300C1260 352 1380 330 1480 260V-40Z" fill="url(#wave-main)" filter="url(#wave-glow)" opacity="0.7" />
                <path d="M760 -40C900 80 960 230 1130 300C1260 352 1380 330 1480 260V-40Z" fill="url(#wave-main)" opacity="0.85" />
            </g>

            {/* Glowing orange ribbon riding on the swoosh */}
            <g className="wave wave--b">
                <path d="M930 -30C1010 120 1110 230 1270 250C1360 262 1420 240 1480 210" fill="none" stroke="url(#wave-ribbon)" strokeWidth="90" strokeLinecap="round" filter="url(#wave-glow)" opacity="0.55" />
                <path d="M930 -30C1010 120 1110 230 1270 250C1360 262 1420 240 1480 210" fill="none" stroke="url(#wave-ribbon)" strokeWidth="38" strokeLinecap="round" />
                <path d="M930 -30C1010 120 1110 230 1270 250C1360 262 1420 240 1480 210" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Deep violet fold, bottom left */}
            <g className="wave wave--c">
                <path d="M-40 640C120 590 250 700 380 760C520 824 590 880 600 940H-40Z" fill="url(#wave-deep)" opacity="0.55" />
                <path d="M-60 700C100 650 220 770 360 820" fill="none" stroke="url(#wave-ribbon)" strokeWidth="44" strokeLinecap="round" filter="url(#wave-glow)" opacity="0.35" />
                <path d="M-60 700C100 650 220 770 360 820" fill="none" stroke="url(#wave-ribbon)" strokeWidth="10" strokeLinecap="round" opacity="0.6" />
            </g>

            {bokehLights.map((light, index) => (
                <circle
                    key={`bokeh-${index}`}
                    className={`bokeh bokeh--${index % 3}`}
                    cx={light.cx}
                    cy={light.cy}
                    r={light.r}
                    fill={`url(#bokeh-${light.tone})`}
                />
            ))}
        </svg>

        <span className="decor-dots hero-dots hero-dots--tl" />
        <span className="decor-dots hero-dots hero-dots--br" />
    </div>
);

export default HeroBackdrop;
