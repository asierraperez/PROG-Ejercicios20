function objectTiempo() {
    class tiempo {
        constructor(hour, min, sec, msec, time, aux_hour, aux_min, aux_sec, aux_msec) {
            this.hour = hour
            this.min = min
            this.sec = sec
            this.msec = msec
            this.time = time
            this.aux_hour = aux_hour
            this.aux_min = aux_min
            this.aux_sec = aux_sec
            this.aux_msec = aux_msec
        }

        menorQue10() {
            this.msec >= 10 ? this.aux_msec = this.msec : this.aux_msec = "0" + this.msec
            this.sec >= 10 ? this.aux_sec = this.sec : this.aux_sec = "0" + this.sec
            this.min >= 10 ? this.aux_min = this.min : this.aux_min = "0" + this.min
            this.hour >= 10 ? this.aux_hour = this.hour : this.aux_hour = "0" + this.hour
        }
    }
    return tiempo
}