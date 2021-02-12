# Hexanium

## Empty Server Finder Example

```js
var Hexanium = require('hexanium')

var Finder = new Hexanium("Roblox Cookie")

async function Start() {
    let GUID = await Finder.FindServer(292439477) // Phantom Forces
    console.log(GUID)
}
```

## Player Finder Example

```js
var Hexanium = require('hexanium')

var Finder = new Hexanium("Roblox Cookie")

async function Start() {
    let GUID = await Finder.FindPlayer(1, 292439477) // Looks for player with the id of 1 (PlayerId), in 292439477 (PlaceId)
    console.log(GUID)
}
```
