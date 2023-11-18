// run this file by putting "node scratchpad.js" in the terminal
const getChapterName = require("./functions/example.js");
const getAboutMe = require("./functions/aboutme.js");

/*
our functions return promises, so we need to wait for the result to come back
we can either use async/await or .then() to do this
read more here:
await/async: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
.then(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
*/
getChapterName().then((chapterName) => {
  if (!chapterName) {
    console.log("Couldn't get chapter name");
    return;
  }

  console.log(`Chapter name: ${chapterName}`);
});

getAboutMe().then((aboutMe) => {
  if (!aboutMe) {
    console.log("Couldn't get about me");
    return;
  }

  aboutMe.forEach(function(entry){ 
    console.log(entry);
  });
});


