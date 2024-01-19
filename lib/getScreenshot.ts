import puppeteer from "puppeteer";

const url = "https://portfolio.mohamed-khaled.com/";

export async function getScreenshotPuppeteer(theme: string): Promise<string> {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1100,
      height: 800,
    },

    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  const storage = { theme: theme };

  await page.evaluateOnNewDocument((values) => {
    for (const key in values) {
      localStorage.setItem(key, values[key as keyof typeof values]);
    }
  }, storage);

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  await new Promise((resolve) => setTimeout(resolve, 500));
  const screenshot = await page.screenshot();
  await browser.close();
  const screenshotBase64 = screenshot.toString("base64");

  const prefix = "data:image/png;base64,";
  return `${prefix}${screenshotBase64}`;
}
