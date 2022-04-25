function ObjectReloj(Timer) {
    class reloj extends Timer {
        constructor(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec, date, intervalClock) {
            super(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec)
            this.date = date
            this.intervalClock = intervalClock
        }
        setDate() {
            this.date = new Date()
            this.hour = this.date.getHours()
            this.min = this.date.getMinutes()
            this.sec = this.date.getSeconds()
        }
    }
    return reloj
}
