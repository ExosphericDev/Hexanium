var ARequest = require('./ARequest.js')
var MaxScans = 5000000

module.exports = async function (PlayerId, PlaceId) {
    console.log(this.RCookie)
    let PlayerToSnipe_Thumbnail = JSON.parse((await ARequest(`https://thumbnails.roblox.com/v1/users/avatar-headshot?size=48x48&format=png&userIds=${PlayerId}`)).text).data[0].imageUrl

    let GameInstances = `https://www.roblox.com/games/getgameinstancesjson?placeId=${PlaceId}&startIndex=`

    var ServerGUID = ""

    for(let ServerIndex = 0; ServerIndex < MaxScans; ServerIndex++ ) {
        if(ServerGUID!=""){
            return ServerGUID
        }

        let InstanceData = (await ARequest(GameInstances+ServerIndex)).text
        InstanceData=JSON.parse(InstanceData)

        InstanceData.Collection.forEach(Server=>{
            // console.log(Server)
            Server.CurrentPlayers.forEach(Player=>{
                if(Player.Thumbnail.Url == PlayerToSnipe_Thumbnail) {
                    ServerGUID = Server.Guid
                }
            })
        })

    }

}