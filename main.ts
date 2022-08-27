scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite4, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    50,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`blank`, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tilePath2, function (sprite2, location2) {
    tiles.setWallAt(location2, false)
    tiles.setTileAt(location2, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite7, location6) {
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    mySprite.say("Level 2", 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite9, location8) {
    tiles.setWallAt(location8, false)
    tiles.setTileAt(location8, assets.tile`transparency16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite3, location3) {
    tiles.setTileAt(location3, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite6, location5) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite8, location7) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite5, location4) {
    tiles.setWallAt(location4, false)
    tiles.setTileAt(location4, assets.tile`transparency16`)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
