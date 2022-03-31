function ObjectChronometer() {
    class cronometro {
        constructor(start, flag, startPressed, intervalChrono, intervalTime,
            hour, min, sec, msec, time,
            timeList, timeFlag) {
            this.start = start
            this.flag = flag
            this.startPressed = startPressed
            this.intervalChrono = intervalChrono
            this.intervalTime = intervalTime
            this.hour = hour
            this.min = min
            this.sec = sec
            this.msec = msec
            this.time = time
            this.timeList = timeList
            this.timeFlag = timeFlag
        }
    }
    return cronometro

}