import { NextResponse } from "next/server";
import blogData from "../Db/blogs.js";

const SITE_URL = "https://mahaballoonadventures.ae"; // Change to your actual domain
const LOCALES = ["en", "ar"]; // Define supported languages

export async function GET() {
  // Generate localized blog routes
  const dynamicRoutes = blogData?.flatMap((blog) =>
    LOCALES.map((locale) => ({
      path: `/${locale}/blog/${blog?.route}`,
      lastmod: "2025-02-04",
    }))
  );

  // Static routes (define manually)
  const staticRoutes = [
    { path: "/", lastmod: "2025-02-04" },
    { path: "/en", lastmod: "2025-02-04" },
    { path: "/en/why-choose-us", lastmod: "2025-02-04" },
    { path: "/en/experiences", lastmod: "2025-02-04" },
    { path: "/en/things-to-do-in-dubai", lastmod: "2025-02-04" },
    { path: "/en/testimonial", lastmod: "2025-02-04" },
    { path: "/en/blogs", lastmod: "2025-02-04" },
    { path: "/en/contact-us", lastmod: "2025-02-04" },
    { path: "/en/compare-packages", lastmod: "2025-02-04" },
    { path: "/en/cart", lastmod: "2025-02-04" },
    { path: "/en/wishlist", lastmod: "2025-02-04" },
    { path: "/en/faqs", lastmod: "2025-02-04" },
    { path: "/en/privacy-policy", lastmod: "2025-02-04" },
    { path: "/en/terms-of-service", lastmod: "2025-02-04" },
    { path: "/en/b2b", lastmod: "2025-02-04" },
    { path: "/en/b2c", lastmod: "2025-02-04" },
    { path: "/ar", lastmod: "2025-02-04" },
    { path: "/ar/why-choose-us", lastmod: "2025-02-04" },
    { path: "/ar/experiences", lastmod: "2025-02-04" },
    { path: "/ar/things-to-do-in-dubai", lastmod: "2025-02-04" },
    { path: "/ar/testimonial", lastmod: "2025-02-04" },
    { path: "/ar/blogs", lastmod: "2025-02-04" },
    { path: "/ar/contact-us", lastmod: "2025-02-04" },
    { path: "/ar/compare-packages", lastmod: "2025-02-04" },
    { path: "/ar/cart", lastmod: "2025-02-04" },
    { path: "/ar/wishlist", lastmod: "2025-02-04" },
    { path: "/ar/faqs", lastmod: "2025-02-04" },
    { path: "/ar/privacy-policy", lastmod: "2025-02-04" },
    { path: "/ar/terms-of-service", lastmod: "2025-02-04" },
    { path: "/ar/b2b", lastmod: "2025-02-04" },
    { path: "/ar/b2c", lastmod: "2025-02-04" },
  ];

  // Generate XML format
  // Generate XML sitemap content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticRoutes, ...dynamicRoutes]
        .map(
          (route) => `
        <url>
          <loc>${SITE_URL}${route.path}</loc>
          <lastmod>${route.lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
