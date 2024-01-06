import { getScreenshotPuppeteer } from "lib/getScreenshot";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  const screenshot = await getScreenshotPuppeteer();
  return new Response(screenshot);
}
