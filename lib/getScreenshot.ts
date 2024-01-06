import puppeteer from "puppeteer";

import { chromium } from "playwright";

const url = "https://portfolio.mohamed-khaled.com/";

export async function getScreenshotPlaywright(): Promise<string> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1100, height: 800 });
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const screenshot = await page.screenshot();
  const screenshotBase64 = screenshot.toString("base64");
  await browser.close();

  const prefix = "data:image/png;base64,";
  return `${prefix}${screenshotBase64}`;
  // return screenshotBase64;
}

export async function getScreenshotPuppeteer(): Promise<string> {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1100,
      height: 800,
    },
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const screenshot = await page.screenshot({
    encoding: "base64",
  });
  await browser.close();

  const prefix = "data:image/png;base64,";
  return `${prefix}${screenshot}`;
}
