// Octokit.js
// https://github.com/octokit/core.js#readme
const { map } = require("cheerio");
const {grabHTMLFromSite} = require ("./common.js");

// npm install @octokit/core
const { Octokit } = require("@octokit/core");
// or: import { Octokit } from "@octokit/core";

async function getContributors() {
    try {
        // create an octokit (github api) instance
        const octokit = new Octokit({
            // put the token here
            auth: ''
        })
        
        // getting the contributors from the backend repo
        let contributors = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
            owner: 'gdscuic',
            repo: 'gdsc-uic-web-backend',
            per_page: 100,
            page: 1
        })

        // getting the contributors from the frontend repo
        let contributors2 = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
            owner: 'gdscuic',
            repo: 'gdsc-uic-web-frontend',
            per_page: 100,
            page: 1
        })

        // creating a map to have the unique contributors and their images
        const contri_and_image = new Map();

        // adding each contributor and their image to the map
        contributors.data.forEach(function(entry){
            // console.log(entry.login);
            contri_and_image.set(entry.login, entry.avatar_url);
        });

        contributors2.data.forEach(function(entry){
            // console.log(entry.login);
            contri_and_image.set(entry.login, entry.avatar_url);
        });

        return contri_and_image;
    } catch (e) {
        console.log(e);
        return null;
    }
}

module.exports = getContributors