sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Orbe.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let Orbe: Sprite = null
scene.setBackgroundColor(11)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 7 5 1 c f . . . . 
    . . . f 1 c c c c c 1 c f . . . 
    . . . f c c f f f f c 1 f . . . 
    . . . f c f f d d f f c f . . . 
    . . f c f d f d d f d f c f . . 
    . . f c f d 6 d d 6 d f c f . . 
    . . f c c f d d d d f c c f . . 
    . f c c f 7 f f f f 7 f c c f . 
    . . f f d 7 b 7 7 b 7 d f f . . 
    . . f d d f 7 b b 7 f d d f . . 
    . . . f f 7 7 7 7 7 7 f f . . . 
    . . . f 7 7 b 7 7 b 7 7 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
Orbe = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbffcf11fcddf......
    ......fcf111111bbf......
    .......ccbdb1b1fcf......
    .......fffbfbfdff.......
    ........ffffffff........
    ........fffffffffff.....
    .........fffffc111cf....
    .........fffff1b1b1f....
    ..........ffffbfbfbf....
    ...........ffff.........
    ........................
    ........................
    ........................
    `, SpriteKind.Food)
