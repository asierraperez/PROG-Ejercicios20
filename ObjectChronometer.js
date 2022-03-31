function ObjectChronometer(Timer) {
    class cronometro extends Timer {
        constructor(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec, start, flag, startPressed, intervalChrono, intervalTime,
            timeList, timeFlag) {
            super(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec)
            this.start = start
            this.flag = flag
            this.startPressed = startPressed
            this.intervalChrono = intervalChrono
            this.intervalTime = intervalTime
            this.timeList = timeList
            this.timeFlag = timeFlag
        }

        sumaSegundos() {
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

    return cronometro

}