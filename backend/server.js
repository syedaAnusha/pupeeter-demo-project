// const express = require("express");
// const puppeteer = require("puppeteer");

// const app = express();

// async function fetchUrls() {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://news.ycombinator.com/");
//     let urls = await page.evaluate(() => {
//       let results = [];
//       let items = document.querySelectorAll("a");
//       items.forEach((item) => {
//         results.push({
//           url: item.getAttribute("href"),
//           text: item.innerText,
//         });
//       });
//       return results;
//     });
//     await browser.close();
//     return urls;
//   } catch (e) {
//     throw e;
//   }
// }

// app.get("/fetch-urls", async (req, res) => {
//   try {
//     const urls = await fetchUrls();
//     res.json(urls);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 5173;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const puppeteer = require("puppeteer");
// Launch the browser and open a new blank page

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL.
  await page.goto("https://insigh.to/");

  // Set screen size.
  await page.setViewport({ width: 1280, height: 1624 });

  // Type into search box.
  // await page.type(".devsite-search-field", "automate beyond recorder");
  await page.screenshot({ path: "example.png" });

  // Wait and click on first result.
  // const searchResultSelector = ".devsite-result-item-link";
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // Locate the full title with a unique string.
  // const textSelector = await page.waitForSelector(
  //   "text/Customize and automate"
  // );
  // const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  // // Print the full title.
  // console.log('The title of this blog post is "%s".', fullTitle);
  await browser.close();
})();

// https://www.websitecarbon.com/
// https://ecograder.com/
// https://news.ycombinator.com/
// https://insigh.to/
