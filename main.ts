basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
probots.initColorSensor(probots.conexiones_ret(conn.CON3))
basic.forever(function () {
    if (probots.getSensedColorValue() == probots.colors_ret(Names_colors.Red)) {
        basic.showIcon(IconNames.Heart)
    } else if (probots.getSensedColorValue() == probots.colors_ret(Names_colors.Green)) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (probots.getSensedColorValue() == probots.colors_ret(Names_colors.Blue)) {
        basic.showIcon(IconNames.Rollerskate)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
