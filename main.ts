let distance_to_object = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.show()
strip.clear()
basic.forever(function () {
    if (distance_to_object > 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    }
    if (distance_to_object <= 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }
    if (distance_to_object <= 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    }
    strip.show()
    basic.pause(5000)
    strip.clear()
})
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
})
