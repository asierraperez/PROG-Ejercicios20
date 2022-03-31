function ObjectReloj() {
    class reloj {
        constructor(time, date, hour, min, sec, intervalClock) {
            this.time = time
            this.date = date
            this.hour = hour
            this.min = min
            this.sec = sec
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
