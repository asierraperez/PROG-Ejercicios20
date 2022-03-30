var h = 0
var m = 0
var s = 0
var ms = 0

function iniciaCronometro() {
    class Chronometer {
        constructor(start, flag, startPressed, intervalChrono, intervalTime, hour, min, sec, msec, time) {
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
        }
    }
    const Chrono = new Chronometer(document.getElementById("start_cronometro"),
        document.getElementById("flag_cronometro"),
        false, null, 100, 0, 0, 0, 0,
        document.getElementById("text_cronometro"))
    //var startCrono = document.getElementById("start_cronometro")
    //var flagCrono = document.getElementById("flag_cronometro")
    //var start_pulsado = false
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
        tiempoVuelta()
    })

}

function activarCrono(aux_chrono) {
    //var crono = document.getElementById("text_cronometro")
    var aux_h, aux_m, aux_s, aux_ms
    aux_chrono.msec++
    //ms++
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


    aux_chrono.msec > 10 ? aux_ms = aux_chrono.msec : aux_ms = "0" + aux_chrono.msec
    aux_chrono.sec > 10 ? aux_s = aux_chrono.sec : aux_s = "0" + aux_chrono.sec
    aux_chrono.min > 10 ? aux_m = aux_chrono.min : aux_m = "0" + aux_chrono.min
    aux_chrono.hour > 10 ? aux_h = aux_chrono.hour : aux_h = "0" + aux_chrono.hour

    aux_chrono.time.innerHTML = aux_h + ":" + aux_m + ":" + aux_s + ":" + aux_ms
}

function tiempoVuelta() {
    var lista = document.getElementById("tiempos_parciales")
    var aux_h, aux_m, aux_s, aux_ms
    ms > 10 ? aux_ms = ms : aux_ms = "0" + ms
    s > 10 ? aux_s = s : aux_s = "0" + s
    m > 10 ? aux_m = m : aux_m = "0" + m
    h > 10 ? aux_h = h : aux_h = "0" + h
    var tiempo_flag = aux_h + ":" + aux_m + ":" + aux_s + ":" + aux_ms
    lista.innerHTML = lista.innerHTML + "<li/>" + tiempo_flag
}
