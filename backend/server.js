const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

async function fetchUrls() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/");
    let urls = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll("a");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          text: item.innerText,
        });
      });
      return results;
    });
    await browser.close();
    return urls;
  } catch (e) {
    throw e;
  }
}

app.get("/fetch-urls", async (req, res) => {
  try {
    const urls = await fetchUrls();
    res.json(urls);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
