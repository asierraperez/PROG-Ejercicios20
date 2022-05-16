/**
 * RELOJ MULTIFUNCIÓN
 */
class Controller {
    constructor(model, view) {
        this.view = view
        this.model = model
        this.view.reset()
        this.view.buttons()
        /**
        * digito máximo para visualizacion
        * @type {number}
        */
        this.MAXDIGIT = 10
        /**
         * milisegundos maximos por segundo
         * @type {number}
         */
        this.MSECSECONDS = 1000
        /**
         * segundos maximos por minuto
         * @type {number}
         */
        this.SECONDSMINUTE = 60
        /**
         * minutos maximos por hora
         * @type {number}
         */
        this.MINUTESHOUR = 60
        /**
         * segundos maximos por hora
         * @type {number}
         */
        /**
         * decisegundos maximos por segundo
         */
        this.DECISECSECONDS = 10
        this.SECONDSHOUR = 3600
        /**
         * Unidades máximas,
         * [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
         * @type {Array}
         */
        this.MAXUNIT = [this.MSECSECONDS, this.SECONDSMINUTE, this.MINUTESHOUR, this.SECONDSHOUR, this.DECISECSECONDS]


        this.model.clock.clk.intervalClock = setInterval(this.activateClock, 1000, this.model.clock.clk, this.MAXDIGIT, this.view);

        this.view.bindStartChrono(this.handleStartChrono.bind(this))
        this.view.bindFlagChrono(this.handleFlagChrono.bind(this))






    }
    /**
     * Gestión del intervalo del reloj
     * @param {Object} actClock - Funciones y atributos intrínsecos al reloj
     * @param {Number} MAXNUM - digito máximo para visualizacion
     * @param {Object} actView - Objetos del HTML
     */
    activateClock(actClock, MAXNUM, viewClock) {

        actClock.setDate()
        actClock.lowerThan10(MAXNUM)
        viewClock.actualizeClock(actClock)
        //console.log("Hora actual: " + actClock.auxHour + ":" + actClock.auxMin + ":" + actClock.auxSec)
        //actView.textClock.innerHTML = actClock.auxHour + ":" + actClock.auxMin + ":" + actClock.auxSec;
    }

    handleStartChrono() {
        if (!this.model.chronometer.chrono.startPressed) {
            this.view.startToStop()
            this.model.chronometer.chrono.intervalChrono = window.setInterval(this.activateCrono, this.model.chronometer.chrono.intervalTime, this.model.chronometer.chrono, this.MAXUNIT, this.MAXDIGIT, this.view)
            this.model.chronometer.chrono.startPressed = true
            //this.model.chronoHandler.startChrno()
        } else {
            this.view.stopToStart()
            this.model.chronometer.stopChrono()
            this.model.chronometer.chrono.startPressed = false
        }
    }

    handleFlagChrono() {
        this.model.chronometer.flagTime()
        this.view.actualizeFlagChrono(this.model.chronometer.chrono)
    }

    /**
    * Gestión del intervalo del cronómetro
    * @param {Object} actChrono - Funciones y atributos intrínsecos al cronómetro 
    * @param {array} UNITCHRONO - Unidades máximas, - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
    * @param {number} DIGITCHRONO - digito máximo para visualizacion
    * @param {Object} actView - Objetos del HTML
    */
    activateCrono(actChrono, UNITCHRONO, DIGITCHRONO, actView) {

        actChrono.addSeconds(UNITCHRONO[4], UNITCHRONO[2], UNITCHRONO[3])
        actChrono.lowerThan10(DIGITCHRONO)
        actView.actualizeChrono(actChrono)
        //console.log("chrono actual: " + actChrono.auxHour + ":" + actChrono.auxMin + ":" + actChrono.auxSec + ":" + actChrono.auxMsec)
        //actView.textCronometer.innerHTML = actChrono.auxHour + ":" + actChrono.auxMin + ":" + actChrono.auxSec + ":" + actChrono.auxMsec
    }






}

const app = new Controller(new Model, new View(new preload))