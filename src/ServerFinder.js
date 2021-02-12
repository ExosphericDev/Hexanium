var ARequest = require('./ARequest.js')
var MaxScans = 5000000

var Sleep = Milliseconds => new Promise(_=>setTimeout(_, Milliseconds))

module.exports = async function (PlaceId) {
    var PlayerCount = 60

    let NextCursor = ""
    let ServerGUID = ""

    async function Update(Url) {
        try {
            Url=Url+NextCursor // Why am I not doing it outside the function? No idea.

            let Servers = JSON.parse((await ARequest(Url)).text)

            NextCursor = Servers.nextPageCursor

            Servers.data.forEach(Server=>{
                if(Server.playing && Server.playing < PlayerCount) {
                    ServerGUID = Server.id
                    PlayerCount = Server.playing
                }
            })

        } catch (O_o) {
            /*
                (▰˘◡˘▰) not gonna bother with errors
                so im just wrapping it in a try statment ≧◡≦
            */
            //throw(O_o) ! Bye bye errors!
        }
    }

    async function GetServerGUID() {
        for(let i=1; i < MaxScans; i++) {
            var URL = `https://games.roblox.com/v1/games/${PlaceId}/servers/Public?sortOrder=Asc&limit=100&cursor=`
            Update(URL)
            await Sleep(250) // 250 ms to not get rate limited

            if(typeof(NextCursor) == "object" && i > 5) return ServerGUID
        }
    }

    return GetServerGUID()
}