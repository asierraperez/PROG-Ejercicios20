/**
 * Gestión el Reloj
 */
class clockHandler {
    /**
     * @param {Number} MAXNUM - digito máximo para visualizacion
     * @param {Object} viewClock - Objetos del HTML 
     */
    constructor(MAXNUM, viewClock) {
        this.MAXNUM = MAXNUM
        this.viewClock = viewClock
        this.clk = new Clock(0, 0, 0, 0,
            "", "", "", "", null, null)

        this.clk.intervalClock = setInterval(this.activateClock, 1000, this.clk, MAXNUM, this.viewClock);
    }

    /**
     * Gestión del intervalo del reloj
     * @param {Object} actClock - Funciones y atributos intrínsecos al reloj
     * @param {Number} MAXNUM - digito máximo para visualizacion
     * @param {Object} actView - Objetos del HTML
     */
    activateClock(actClock, MAXNUM, actView) {
        actClock.setDate()
        actClock.lowerThan10(MAXNUM)
        actView.textClock.innerHTML = actClock.auxHour + ":" + actClock.auxMin + ":" + actClock.auxSec;
    }

    /**
     * Resetear intervalo del reloj
     */
    stopIntervalClock() {
        clearInterval(this.clk.intervalClock);
    }
}