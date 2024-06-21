const puppeteer = require("puppeteer");
// Launch the browser and open a new blank page

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate the page to a URL.
  await page.goto("https://www.vocabulary.com/lists/52473");

  // Set screen size.
  await page.setViewport({ width: 1280, height: 1624 });

  await page.screenshot({ path: "example.png", fullPage: true });
  await browser.close();
})();
