function clearScreen () {
    basic.pause(100)
    basic.clearScreen()
}
function displayPasswordEntererd () {
    I2C_LCD1602.ShowString(passwordentered, 0, 1)
}
let passwordentered = ""
servos.P0.setAngle(180)
let password_wrong = 0
let password = "1234"
passwordentered = ""
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.ShowString("Enter Password:", 0, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(1)
        clearScreen()
        passwordentered = "" + passwordentered + "1"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(4)
        clearScreen()
        passwordentered = "" + passwordentered + "4"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(7)
        clearScreen()
        passwordentered = "" + passwordentered + "7"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("*")
        clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(2)
        clearScreen()
        passwordentered = "" + passwordentered + "2"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(5)
        clearScreen()
        passwordentered = "" + passwordentered + "5"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(8)
        clearScreen()
        passwordentered = "" + passwordentered + "8"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(0)
        clearScreen()
        passwordentered = "" + passwordentered + "0"
        displayPasswordEntererd()
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(3)
        clearScreen()
        passwordentered = "" + passwordentered + "3"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showNumber(6)
        clearScreen()
        passwordentered = "" + passwordentered + "6"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(9)
        clearScreen()
        passwordentered = "" + passwordentered + "9"
        displayPasswordEntererd()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("#")
        clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("A")
        clearScreen()
        pins.servoWritePin(AnalogPin.P0, 90)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("B")
        servos.P0.setAngle(180)
        clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showString("C")
        clearScreen()
        passwordentered = ""
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Enter Password:", 0, 0)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("D")
        clearScreen()
        if (password == passwordentered) {
            basic.showIcon(IconNames.Yes)
            I2C_LCD1602.clear()
            passwordentered = ""
            I2C_LCD1602.ShowString("Enter Password:", 0, 0)
            servos.P0.setAngle(90)
        } else {
            password_wrong = password_wrong + 1
            servos.P0.setAngle(180)
            basic.showIcon(IconNames.No)
            if (password_wrong == 3) {
                music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
                basic.pause(5000)
                music.stopAllSounds()
                servos.P0.setAngle(180)
            }
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("Enter Password:", 0, 0)
            passwordentered = ""
        }
        basic.pause(100)
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
})
