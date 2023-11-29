/*
cron-worker.js

this file is responsible for grabbing the html off the site and running our web scraping methods on it
the results are saved to a file on the disk which is then read by the server

this is done as a sort of cache so that we don't have to scrape the site every time a user makes a request
so instead of spamming the main website with requests, we only scrape it once every 24 hours
*/

const fs = require("fs");
const { saveHTMLToFile } = require("./functions/common.js");
const getAboutMe = require("./functions/aboutme.js");
const getContributors = require("./functions/githubcontributors.js");

async function main() {
  await saveHTMLToFile();

  const aboutMeText = (await getAboutMe()).join("\n");
  // const githubContributors = await getContributors();

  const data = {
    aboutMeText,
    // githubContributors: githubContributors,
  };


  // save data to disk
  fs.writeFileSync("data.json", JSON.stringify(data));
}

main();