const fetch = require("cross-fetch");
const fs = require("fs");

async function fetcher(url) {
  // throw if response is not ok
  // otherwise return response.json()

  const response = await fetch(url);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const text = await response.text();
  return text;
}

async function grabHTMLFromSite() {
  try {
    // const html = await fetcher("https://gdsc.community.dev/university-of-illinois-chicago/");
    // save html to file
    // fs.writeFileSync("html.txt", html);
    // read html from file
    const html = fs.readFileSync("html.txt", "utf8");
    return html;
  } catch (error) {
    console.error("Couldn't get HTML from chapter page", error);
    return null;
  }
}

// this file may export multiple functions in the future, so we use an object to contain a list of them
module.exports = { grabHTMLFromSite, fetcher };
