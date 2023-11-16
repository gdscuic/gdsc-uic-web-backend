// this is an example of how you might want to create your own function that takes stuff from the site
const { grabHTMLFromSite } = require("./common.js");
const cheerio = require("cheerio");

/**
 * Retrieves the name of the first chapter from the site's HTML.
 * @async
 * @function getChapterName
 * @returns {Promise<string|null>} The name of the chapter, or null if the HTML could not be retrieved.
 */
async function getChapterName() {
  const html = await grabHTMLFromSite();

  if (!html) return null;

  const $ = cheerio.load(html);

  // https://cheerio.js.org/docs/api/classes/Cheerio#first
  // https://cheerio.js.org/docs/api/classes/Cheerio#text
  const chapterName = $(".dynamic-text").first().text();
  return chapterName;
}

module.exports = getChapterName;
