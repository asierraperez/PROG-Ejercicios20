function iniciaCronometro(chrono_time) {

    const Chronometer = ObjectChronometer(chrono_time)

    const Chrono = new Chronometer(0, 0, 0, 0,
        document.getElementById("text_cronometro"),
        "", "", "", "",
        document.getElementById("start_cronometro"),
        document.getElementById("flag_cronometro"),
        false, null, 100,
        document.getElementById("tiempos_parciales"))

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

    aux_chrono.sumaSegundos()
    aux_chrono.menorQue10()

    aux_chrono.time.innerHTML = aux_chrono.aux_hour + ":" + aux_chrono.aux_min + ":" + aux_chrono.aux_sec + ":" + aux_chrono.aux_msec
}

function tiempoVuelta(flagChrono) {

    flagChrono.timeFlag = flagChrono.time.innerHTML
    flagChrono.timeList.innerHTML = flagChrono.timeList.innerHTML + "<li/>" + flagChrono.timeFlag
}
