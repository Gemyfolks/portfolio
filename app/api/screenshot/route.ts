import captureWebsite from "capture-website";
import { NextRequest, NextResponse } from "next/server";

const url = "https://portfolio.mohamed-khaled.com/";
export async function GET(req: NextRequest, res: NextResponse) {
  const screenshot = await captureWebsite.base64(url, {
    darkMode: true,
    width: 1100,
    height: 800,
  });
  const prefix = "data:image/png;base64,";
  return new Response(`${prefix}${screenshot}`);
}
