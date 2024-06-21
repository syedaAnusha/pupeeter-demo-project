const puppeteer = require("puppeteer");
// Launch the browser and open a new blank page

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set screen size.
  await page.setViewport({ width: 1920, height: 1080 });

  const URL =
    "https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/";
  // Navigate the page to a URL.

  await page.goto(URL);
  await page.waitForNetworkIdle();
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  await browser.close();
})();
