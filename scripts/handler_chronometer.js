/**
 * Gestión del cronómetro
 * @param {number} MAXDIGITCHRONO - digito máximo para visualizacion
 * @param {Array} MAXUNITCHRONO - Unidades máximas, - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]

 */
class chronoHandler {
    constructor(MAXDIGITCHRONO, MAXUNITCHRONO, viewChrono) {

        this.MAXDIGITCHRONO = MAXDIGITCHRONO
        this.MAXUNITCHRONO = MAXUNITCHRONO
        this.viewChrono = viewChrono
        this.i = 0

        this.chrono = new Chronometer(0, 0, 0, 0,
            "", "", "", "",
            false, null, 100,
            null)
        this.chrono.timeList = new Array

        this.eventStart()


    }
    eventStart() {
        this.viewChrono.startChrono.addEventListener("click", (evt) => {

            if (!this.chrono.startPressed) {
                this.startChrno()
            } else {
                this.stopChrono()
            }
        })
        this.viewChrono.flagChrono.addEventListener("click", (evt) => {
            this.flagTime()
        })
    }

    startChrno() {
        this.startToStop()
        this.chrono.intervalChrono = window.setInterval(this.activateCrono, this.chrono.intervalTime, this.chrono, this.MAXUNITCHRONO, this.MAXDIGITCHRONO, this.viewChrono)
    }
    startToStop() {
        this.viewChrono.startChrono.style.backgroundColor = "firebrick"
        this.viewChrono.flagChrono.disabled = false
        this.chrono.startPressed = true
        this.viewChrono.startChrono.innerHTML = "Pausar"
    }


    activateCrono(actChrono, UNITCHRONO, DIGITCHRONO, actView) {

        actChrono.addSeconds(UNITCHRONO[4], UNITCHRONO[2], UNITCHRONO[3])
        actChrono.lowerThan10(DIGITCHRONO)

        actView.textCronometer.innerHTML = actChrono.auxHour + ":" + actChrono.auxMin + ":" + actChrono.auxSec + ":" + actChrono.auxMsec
    }


    stopChrono() {
        this.stopToStart()
        clearInterval(this.chrono.intervalChrono)
    }
    stopToStart() {
        this.viewChrono.startChrono.style.backgroundColor = "chartreuse"
        this.viewChrono.flagChrono.disabled = true
        this.chrono.startPressed = false
        this.viewChrono.startChrono.innerHTML = "Start"
    }
    flagTime() {

        this.chrono.timeList[this.i] = this.viewChrono.textCronometer.innerHTML
        this.viewChrono.partialTimes.innerHTML = this.viewChrono.partialTimes.innerHTML + "<li/>" + this.viewChrono.textCronometer.innerHTML
        this.i++
    }

}