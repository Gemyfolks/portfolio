import puppeteer from "puppeteer";

import { chromium } from "playwright";

const url = "https://portfolio.mohamed-khaled.com/";

export async function getScreenshotPlaywright(): Promise<Buffer> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1100, height: 600 });
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const screenshot = await page.screenshot();
  await browser.close();
  return screenshot;
}

export async function getScreenshotPuppeteer(): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1100,
      height: 600,
    },
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const screenshot = await page.screenshot();
  await browser.close();
  return screenshot;
}
