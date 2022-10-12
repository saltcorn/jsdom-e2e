const jsdom = require("jsdom");
const { JSDOM } = jsdom;



class E2ESession {
    constructor() {
        const cookieJar = new jsdom.CookieJar();
        this.options = { cookieJar, runScripts: "dangerously", resources: "usable" }
        this.dom = null
    }

    async goto(url) {
        this.dom = await JSDOM.fromURL(url, this.options)

    }
    contains(str) {
        this.assert(this.dom.serialize().includes(str), "contains " + str)
        return this
    }
    assert(b, s) {
        if (!b) throw new Error(s)
    }

}

const go = async () => {
    const s = new E2ESession()
    await s.goto("https://saltcorn.com/")
    s.contains("Focus on database-backed")
    s.contains("Focus on datsabase-backed")
}

go()