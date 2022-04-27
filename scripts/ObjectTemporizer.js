//function ObjectTemporizer(Timer) {
class Temporizer extends Time {
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

    calculateTimeoutTime(MAXSECONDSHOUR, MAXSECONDSMINUTE, MAXMSECSECONDS) {
        this.timeoutTime = (this.hour * MAXSECONDSHOUR * MAXMSECSECONDS) + (this.min * MAXSECONDSMINUTE * MAXMSECSECONDS) + (this.sec * MAXMSECSECONDS)
        return this.timeoutTime
    }

    subtractSeconds(MAXSECONDS, MAXMINUTES) {
        if (this.sec != 0) {
            this.sec--
        } else {
            if (this.min == 0) {
                this.hour--
                this.min = MAXMINUTES - 1

            } else {
                this.min--

            }
            this.sec = MAXSECONDS - 1
        }
    }

}

    //return temporizador
//}