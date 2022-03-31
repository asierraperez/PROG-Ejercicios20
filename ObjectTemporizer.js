function ObjectTemporizer() {
    class temporizador {
        constructor(start, stop, reset, stopPressed, time, hour, min, sec,
            intervalTime, intervalTemporizer, timeoutTime, timeoutTemporizer) {
            this.start = start
            this.stop = stop
            this.reset = reset
            this.stopPressed = stopPressed
            this.time = time
            this.hour = hour
            this.min = min
            this.sec = sec
            this.intervalTime = intervalTime
            this.intervalTemporizer = intervalTemporizer
            this.timeoutTime = timeoutTime
            this.timeoutTemporizer = timeoutTemporizer

        }

        calcularTimeoutTime() {
            this.timeoutTime = (this.hour * 3600 * 1000) + (this.min * 60 * 1000) + (this.sec * 1000)
            return this.timeoutTime
        }

    }

    return temporizador
}