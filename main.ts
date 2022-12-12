let distance_to_object = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.show()
strip.clear()
basic.forever(function () {
    if (distance_to_object > 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    }
    if (distance_to_object <= 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    }
    if (distance_to_object <= 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    }
})
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
})
