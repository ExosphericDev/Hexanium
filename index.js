function Finder(RCookie) {
    if(typeof(RCookie)=="undefined") throw (new Error("Did you forget to add a cookie?"))

    this.RCookie = RCookie
    /*The RCookie is used for PlayerFinder.js*/
    this.FindPlayer = require('./src/PlayerFinder.js')
    this.FindServer = require('./src/ServerFinder.js')
}

module.exports = Finder