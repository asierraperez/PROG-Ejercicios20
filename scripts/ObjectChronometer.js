class Chronometer extends Time {
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec, start, flag, startPressed, intervalChrono, intervalTime,
        timeList, timeFlag) {
        super(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec)
        this.start = start
        this.flag = flag
        this.startPressed = startPressed
        this.intervalChrono = intervalChrono
        this.intervalTime = intervalTime
        this.timeList = timeList
        this.timeFlag = timeFlag
    }

    addSeconds() {
        this.msec++
        if (this.msec > 9) {
            this.sec++
            this.msec = 0
            if (this.sec > 59) {
                this.min++
                this.sec = 0
                if (this.min > 59) {
                    this.hour++
                    this.min = 0
                }
            }

        }
    }

}