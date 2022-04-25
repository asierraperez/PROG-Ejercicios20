function iniciaCronometro() {

    const Chrono = new Chronometer(0, 0, 0, 0,
        document.getElementById("textChronometer"),
        "", "", "", "",
        document.getElementById("startChronometer"),
        document.getElementById("flagChronometer"),
        false, null, 100,
        document.getElementById("partialTimes"))

    Chrono.start.addEventListener("click", (evt) => {

        if (!Chrono.startPressed) {
            evt.currentTarget.style.backgroundColor = "firebrick"
            Chrono.flag.disabled = false
            Chrono.startPressed = true
            Chrono.start.innerHTML = "Pausar"
            Chrono.intervalChrono = window.setInterval(activateCrono, Chrono.intervalTime, Chrono)
        } else {
            evt.currentTarget.style.backgroundColor = "chartreuse"
            Chrono.flag.disabled = true
            Chrono.startPressed = false
            Chrono.start.innerHTML = "Start"
            clearInterval(Chrono.intervalChrono)
        }
    })
    Chrono.flag.addEventListener("click", (evt) => {
        flagTime(Chrono)
    })

}

function activateCrono(auxChrono) {

    auxChrono.addSeconds()
    auxChrono.lowerThan10()

    auxChrono.time.innerHTML = auxChrono.auxHour + ":" + auxChrono.auxMin + ":" + auxChrono.auxSec + ":" + auxChrono.auxMsec
}

function flagTime(flagChrono) {

    flagChrono.timeFlag = flagChrono.time.innerHTML
    flagChrono.timeList.innerHTML = flagChrono.timeList.innerHTML + "<li/>" + flagChrono.timeFlag
}
