let Humedad = 0
let NivelAgua = 0
let Segundos = 1
let LevelWater = 1
let NivelHumedad = 0.5
pins.digitalWritePin(DigitalPin.P8, 0)
while (true) {
    NivelAgua = pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    500,
    0,
    1
    )
    if (input.buttonIsPressed(Button.A)) {
        if (NivelAgua >= LevelWater) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.showLeds(`
                # . . . #
                . # . . .
                # . # . #
                . # . # .
                . . # . #
                `)
            basic.pause(1000 * Segundos)
            pins.digitalWritePin(DigitalPin.P8, 0)
            continue;
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        Segundos = Segundos + 1
        if (Segundos > 9) {
            Segundos = 1
        }
        basic.showNumber(Segundos)
        continue;
    }
    Humedad = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    500,
    0,
    1
    )
    if (Humedad >= NivelHumedad) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (NivelAgua >= LevelWater) {
            basic.showLeds(`
                # . . . #
                . # . . .
                # . # . #
                . # . # .
                . . # . #
                `)
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(1000 * Segundos)
            pins.digitalWritePin(DigitalPin.P8, 0)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
    basic.pause(1000)
}
