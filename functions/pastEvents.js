// TODO set up an express server of some kind so frontend can grab data from here
const { grabHTMLFromSite } = require("./common.js");
const cheerio = require("cheerio");

async function getPastEvents() {
  let pastEvents = [];
  try {
    const html = await grabHTMLFromSite();
    if (!html) return null;
    let $ = await cheerio.load(html);
    const website = $("#mu9W6Ekd-k3");
    const stuff = website.find(".dynamic-text");
    stuff.each((i, e) => {
      pastEvents.push($(e).text().trim());
    });
  } catch (e) {
    console.log(e);
  }
  return pastEvents;
}
module.exports = getPastEvents;
