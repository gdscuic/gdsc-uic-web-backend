const { grabHTMLFromSite } = require("./common.js");
const cheerio = require("cheerio");

async function getOrganizers(){
  let organizers = [];
  try{

  
    const html = await grabHTMLFromSite();
    let $ = await cheerio.load(html);
    if (!html) return null;

  
    const organizer = $("#TLsV2lJge1b");
    const information = organizer.find(".dynamic-text>div")
    // const information = organizer.find("dynamic-text");
    information.each((i,e) => {
    organizers.push($(e).text())
    });

} catch (e) {
    console.log(e);
}
return organizers;
}

module.exports = getOrganizers;
