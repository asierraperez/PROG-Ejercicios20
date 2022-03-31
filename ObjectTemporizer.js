function ObjectTemporizer(Timer) {
    class temporizador extends Timer {
        constructor(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec, start, stop, reset, stopPressed,
            intervalTime, intervalTemporizer, timeoutTime, timeoutTemporizer) {
            super(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec)
            this.start = start
            this.stop = stop
            this.reset = reset
            this.stopPressed = stopPressed
            this.intervalTime = intervalTime
            this.intervalTemporizer = intervalTemporizer
            this.timeoutTime = timeoutTime
            this.timeoutTemporizer = timeoutTemporizer

        }

        calcularTimeoutTime() {
            this.timeoutTime = (this.hour * 3600 * 1000) + (this.min * 60 * 1000) + (this.sec * 1000)
            return this.timeoutTime
        }

        RestarSegundos() {
            if (this.sec != 0) {
                this.sec--
            } else {
                if (this.min == 0) {
                    this.hour--
                    this.min = 59

                } else {
                    this.min--

                }
                this.sec = 59
            }
        }

    }

    return temporizador
}