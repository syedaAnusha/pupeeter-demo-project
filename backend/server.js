const express = require("express");
const puppeteer = require("puppeteer");
const lighthouse = require("lighthouse");
const { URL } = require("url");

const app = express();
app.use(express.json());

app.post("/generate-report", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send({ error: "URL is required" });
  }

  try {
    const browser = await puppeteer.launch({ headless: true });
    const { lhr } = await lighthouse(url, {
      port: new URL(browser.wsEndpoint()).port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    });

    await browser.close();

    res.send(lhr);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
