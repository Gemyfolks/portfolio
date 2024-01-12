const { join } = require("path");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer .
  cacheDirectory: join(
    __dirname,
    ".cache",
    "puppeteer",
    "chrome",
    "linux-119.0.6045.105",
    "chrome-linux64",
    "chrome"
  ),
};
