const puppeteerExtra = require("puppeteer-extra");
const Stealth = require("puppeteer-extra-plugin-stealth");
// Launch the browser and open a new blank page

puppeteerExtra.use(Stealth());

(async () => {
  const browser = await puppeteerExtra.launch();
  const page = await browser.newPage();

  // Set screen size.
  await page.setViewport({ width: 1920, height: 1080 });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  );

  await page.goto("https://www.vocabulary.com/lists/52473");
  await page.waitForNetworkIdle(); // Wait for network resources to fully load

  await page.screenshot({ path: "screenshot_stealth.png" });

  await browser.close();
})();
