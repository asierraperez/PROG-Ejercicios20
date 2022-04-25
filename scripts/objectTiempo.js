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

    lowerThan10() {
        this.msec >= 10 ? this.auxMsec = this.msec : this.auxMsec = "0" + this.msec
        this.sec >= 10 ? this.auxSec = this.sec : this.auxSec = "0" + this.sec
        this.min >= 10 ? this.auxMin = this.min : this.auxMin = "0" + this.min
        this.hour >= 10 ? this.auxHour = this.hour : this.auxHour = "0" + this.hour
    }
}
    //return tiempo
//}