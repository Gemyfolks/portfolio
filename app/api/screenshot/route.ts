import { getScreenshotPuppeteer } from "lib/getScreenshot";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);

  const theme = url.searchParams.get("theme");

  const screenshot = await getScreenshotPuppeteer(theme ?? "dark");
  return new Response(screenshot);
}
