var superagent = require('superagent')

module.exports = async function (URL) {
    let Response = await superagent.get(URL).set("Cookie", `.ROBLOSECURITY=${this.RCookie}`)
    return Response
}