const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const options = { runScripts: "dangerously", resources: "usable" }
JSDOM.fromURL("https://saltcorn.com/", options).then(dom => {
    console.log(dom.serialize());
});