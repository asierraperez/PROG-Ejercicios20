/**
 * Gestión del cronómetro
 * @param {number} MAXDIGITCHRONO - digito máximo para visualizacion
 * @param {Array} MAXUNITCHRONO - Unidades máximas, - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]

 */
function initiateCronometro(MAXDIGITCHRONO, MAXUNITCHRONO) {
    /**
     * funciones y atributos intrinsecos al cronómetro
     * @type {object}
     */
    const Chrono = new Chronometer(0, 0, 0, 0,
        document.getElementById("textChronometer"),
        "", "", "", "",
        document.getElementById("startChronometer"),
        document.getElementById("flagChronometer"),
        false, null, 100,
        document.getElementById("partialTimes"), "")

    Chrono.start.addEventListener("click", (evt) => {

        if (!Chrono.startPressed) {
            startChrno(Chrono, MAXDIGITCHRONO, MAXUNITCHRONO)
        } else {
            stopChrono(Chrono)
        }
    })
    Chrono.flag.addEventListener("click", (evt) => {
        flagTime(Chrono)
    })

}

/**
 * inciar cronómetro
 * @param {object} chronoStart 
 * @param {number} MAXDIGITCHRONO 
 * @param {Array} MAXUNITCHRONO 
 */
function startChrno(chronoStart, MAXDIGITCHRONO, MAXUNITCHRONO) {
    startToStop(chronoStart)
    chronoStart.intervalChrono = window.setInterval(activateCrono, chronoStart.intervalTime, chronoStart, MAXDIGITCHRONO, MAXUNITCHRONO)
}

/**
 * Cambiar start por stop
 * @param {object} chronoStartStop 
 */
function startToStop(chronoStartStop) {
    chronoStartStop.start.style.backgroundColor = "firebrick"
    chronoStartStop.flag.disabled = false
    chronoStartStop.startPressed = true
    chronoStartStop.start.innerHTML = "Pausar"
}

/**
 * parar cronómetro
 * @param {object} chronoStop 
 */
function stopChrono(chronoStop) {
    stopToStart(chronoStop)
    clearInterval(chronoStop.intervalChrono)
}

/**
 * Cambiar stop por start
 * @param {object} chronoStartStop 
 */
function stopToStart(chronoStopStart) {
    chronoStopStart.start.style.backgroundColor = "chartreuse"
    chronoStopStart.flag.disabled = true
    chronoStopStart.startPressed = false
    chronoStopStart.start.innerHTML = "Start"
}

/**
 * Activación del cronómetro
 * @param {object} auxChrono - funciones y atributos intrinsecos al cronómetro
 * @param {number} MAXDIGITCHRONO - digito máximo para visualizacion
 * @param {Array} MAXUNITCHRONO - Unidades máximas, - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR]
 */
function activateCrono(auxChrono, MAXDIGITCHRONO, MAXUNITCHRONO) {

    auxChrono.addSeconds(MAXUNITCHRONO[4], MAXUNITCHRONO[1], MAXUNITCHRONO[2])
    auxChrono.lowerThan10(MAXDIGITCHRONO)

    auxChrono.time.innerHTML = auxChrono.auxHour + ":" + auxChrono.auxMin + ":" + auxChrono.auxSec + ":" + auxChrono.auxMsec
}

/**
 * creación de tiempos de vuelta
 * @param {object} flagChrono - funciones y atributos intrinsecos al cronómetro
 */
function flagTime(flagChrono) {

    flagChrono.timeFlag = flagChrono.time.innerHTML
    flagChrono.timeList.innerHTML = flagChrono.timeList.innerHTML + "<li/>" + flagChrono.timeFlag
}
