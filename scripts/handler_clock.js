/**
 * Gestión el Reloj
 */
class clockHandler {

    constructor() {
        //this.MAXNUM = MAXNUM

        this.clk = new Clock(0, 0, 0, 0,
            "", "", "", "", null, null)

    }



    /**
     * Resetear intervalo del reloj
     */
    stopIntervalClock() {
        clearInterval(this.clk.intervalClock);
    }
}