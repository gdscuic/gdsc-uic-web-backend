const puppeteer = require("puppeteer");

async function getHTMLFromPuppeteer() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://gdsc.community.dev/university-of-illinois-chicago/");

  // https://stackoverflow.com/questions/50658540/use-puppeteer-to-search-for-element-based-on-inner-text
  const loadMoreXPath = "//strong[contains(text(), 'Load more')]";

  await page.waitForXPath(loadMoreXPath);

  while (await page.$x(loadMoreXPath)) {
    const buttonHandle = await page.$x(loadMoreXPath);

    // console.log("NEW LOOP HANDLE", buttonHandle);
    if (buttonHandle.length === 0) {
      break;
    }
    // check if button still exists

    await buttonHandle[0].click();
    await page.waitForTimeout(1500);
  }

  // console.log("SCRIPT DONE");

  const html = await page.content();

  await browser.close();

  return html;
}

module.exports = getHTMLFromPuppeteer;
