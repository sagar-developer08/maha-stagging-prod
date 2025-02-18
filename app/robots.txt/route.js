import { NextResponse } from "next/server";

export function GET() {
  const robotsTxt = `User-agent: *
Disallow:
Sitemap: https://mahaballoonadventures.ae/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
