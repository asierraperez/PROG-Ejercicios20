//function ObjectReloj(Timer) {
class Clock extends Time {
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec, date, intervalClock) {
        super(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec)
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
    //return reloj
//}
