basic.forever(function () {
    led.toggle(0, 0)
    // This needs to be done with a real micro:bit.
    // Play music
    // The sound impacting the micro:bit will cause vibrations in the board.
    // These vibrations will be picked up by the accelerometer.
    // Send the accelerometer values to the serial port for graphing.
    // Download to excel.
    serial.writeValue("Sound Vibration", input.acceleration(Dimension.Strength))
})
