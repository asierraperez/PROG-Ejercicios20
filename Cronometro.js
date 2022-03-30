function iniciaCronometro() {
    class Chronometer {
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

    const Chrono = new Chronometer(document.getElementById("start_cronometro"),
        document.getElementById("flag_cronometro"),
        false, null, 100, 0, 0, 0, 0,
        document.getElementById("text_cronometro"),
        document.getElementById("tiempos_parciales"), "")

    Chrono.start.addEventListener("click", (evt) => {

        if (!Chrono.startPressed) {
            evt.currentTarget.style.backgroundColor = "firebrick"
            Chrono.flag.disabled = false
            Chrono.startPressed = true
            Chrono.start.innerHTML = "Pausar"
            Chrono.intervalChrono = window.setInterval(activarCrono, Chrono.intervalTime, Chrono)
        } else {
            evt.currentTarget.style.backgroundColor = "chartreuse"
            Chrono.flag.disabled = true
            Chrono.startPressed = false
            Chrono.start.innerHTML = "Start"
            clearInterval(Chrono.intervalChrono)
        }
    })
    Chrono.flag.addEventListener("click", (evt) => {
        tiempoVuelta(Chrono)
    })

}

function activarCrono(aux_chrono) {

    /**
    auxiliar para el display del tiempo.
    en caso de que las unidades sean >10, añadirá un 0 delante
    [0]==horas
    [1]==minutos
    [2]==segundos
    [3]==milisegundos
    */

    var aux_time = ["", "", "", ""]

    aux_chrono.msec++
    if (aux_chrono.msec > 9) {
        aux_chrono.sec++
        aux_chrono.msec = 0
        if (aux_chrono.sec > 59) {
            aux_chrono.min++
            aux_chrono.sec = 0
            if (aux_chrono.min > 59) {
                aux_chrono.hour++
                aux_chrono.min = 0
            }
        }

    }


    aux_chrono.msec >= 10 ? aux_time[3] = aux_chrono.msec : aux_time[3] = "0" + aux_chrono.msec
    aux_chrono.sec >= 10 ? aux_time[2] = aux_chrono.sec : aux_time[2] = "0" + aux_chrono.sec
    aux_chrono.min >= 10 ? aux_time[1] = aux_chrono.min : aux_time[1] = "0" + aux_chrono.min
    aux_chrono.hour >= 10 ? aux_time[0] = aux_chrono.hour : aux_time[0] = "0" + aux_chrono.hour

    aux_chrono.time.innerHTML = aux_time[0] + ":" + aux_time[1] + ":" + aux_time[2] + ":" + aux_time[3]
}

function tiempoVuelta(flagChrono) {

    flagChrono.timeFlag = flagChrono.time.innerHTML
    flagChrono.timeList.innerHTML = flagChrono.timeList.innerHTML + "<li/>" + flagChrono.timeFlag
}
