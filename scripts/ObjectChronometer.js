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

    addSeconds(MAXMSEC, MAXSECONDS, MAXMINUTE) {
        this.msec++
        if (this.msec > MAXMSEC - 1) {
            this.sec++
            this.msec = 0
            if (this.sec > MAXSECONDS - 1) {
                this.min++
                this.sec = 0
                if (this.min > MAXMINUTE - 1) {
                    this.hour++
                    this.min = 0
                }
            }

        }
    }

}