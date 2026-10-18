/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          soft: "var(--color-accent-soft)",
        },
        ink: "var(--color-text)",
        muted: "var(--color-text-muted)",
        surface: "var(--color-surface)",
        line: "var(--color-border)",
        dark: "var(--color-dark)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        token: "var(--radius-md)",
        "token-lg": "var(--radius-lg)",
        "token-xl": "var(--radius-xl)",
      },
      boxShadow: {
        token: "var(--shadow-sm)",
        "token-md": "var(--shadow-md)",
      },
    },
  },
  plugins: [],
}
