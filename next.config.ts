import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images served from the /public directory
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // HTTP Security Headers — applied to every route
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Force HTTPS for 2 years (Vercel always serves HTTPS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Control referrer information
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Content Security Policy
          // Allows: same-origin scripts/styles, Google Fonts, inline styles
          // (Tailwind v4 injects inline <style> tags at runtime via @theme)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Google Fonts stylesheets & font files
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              // Next.js needs inline scripts + its own origin for RSC streaming
              "script-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
