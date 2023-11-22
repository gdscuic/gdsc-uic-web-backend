// TODO set up an express server of some kind so frontend can grab data from here
const {grabHTMLFromSite} = require ("./common.js");
const cheerio = require ("cheerio");



async function getPastEvents(){
    let pastEvents = [];
    try {
        const html = await grabHTMLFromSite();
        if (!html) return null;
        let $ = await cheerio.load(html);
        const website = "#mu9W6Ekd-k3"
        $(website.find("dynamic-text")).each((i,e) => {
            pastEvents.push($(e).text().trim())
            //''' console.log(e); '''
        });
    }catch(e) {
            console.log(e)
        };
        return pastEvents;
    };

// app.get("/oldData", (req, res) => {
//     res.send('oldData');
// });
module.exports = getPastEvents;

// app.listen(port, () => console.log("Server running") );
