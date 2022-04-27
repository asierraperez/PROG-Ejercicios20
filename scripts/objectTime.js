//function objectTiempo() {
class Time {
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec) {
        this.hour = hour
        this.min = min
        this.sec = sec
        this.msec = msec
        this.time = time
        this.auxHour = auxHour
        this.auxMin = auxMin
        this.auxSec = auxSec
        this.auxMsec = auxMsec
    }

    lowerThan10(MAXNUM) {
        this.auxMsec = this.msec
        this.sec >= MAXNUM ? this.auxSec = this.sec : this.auxSec = "0" + this.sec
        this.min >= MAXNUM ? this.auxMin = this.min : this.auxMin = "0" + this.min
        this.hour >= MAXNUM ? this.auxHour = this.hour : this.auxHour = "0" + this.hour
    }
}
    //return tiempo
//}