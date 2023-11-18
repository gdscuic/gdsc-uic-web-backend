const {grabHTMLFromSite} = require ("./common.js");
const cheerio = require ("cheerio");

async function getAboutMe() {
    let aboutMe = []; //Creates an array to hold about me 
     
    try {
        const html = await grabHTMLFromSite();
        if (!html) return null;
        let $ = await cheerio.load(html);

        $(".dynamic-text>p").each((i, e) => { 
        /* Uses ".dynamic-text>p" because each section of the about me is within paragraph (<p>) elements and 
        there are no other paragraph elements on home page*/
            aboutMe.push($(e).text()) //adds text from each paragaph to the array
        }); 
    } catch (e) {
        console.log(e);
    }

    return aboutMe; 
}

module.exports = getAboutMe;
