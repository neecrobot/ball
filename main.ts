let EPOS = 0
let EY = 0
let EX = 0
let GY = 0
let GX = 0
let MY = 0
let MX = 0
let START = 0
basic.forever(function () {
    if (START == 1) {
        led.unplot(MX, MY)
        GX = input.acceleration(Dimension.X)
        GY = input.acceleration(Dimension.Y)
        if (100 < GX && MX < 4) {
            MX += 1
        } else if (GX < -100 && 0 < MX) {
            MX += -1
        }
        if (100 < GY && MY < 4) {
            MY += 1
        } else if (GY < -100 && 0 < MY) {
            MY += -1
        }
        basic.pause(100)
        led.plot(MX, MY)
        basic.pause(100)
        if (MX == EX && MY == EY) {
            basic.pause(500)
            led.unplot(MX, MY)
            START = 2
        }
    }
})
basic.forever(function () {
    if (START == 0) {
        basic.clearScreen()
        MX = 0
        MY = 0
        EPOS = randint(1, 24)
        EX = EPOS % 5
        EY = (EPOS - EX) / 5
        led.plot(EX, EY)
        led.plot(MX, MY)
        START = 1
    }
})
basic.forever(function () {
    if (START == 2) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        START = 0
    }
})
