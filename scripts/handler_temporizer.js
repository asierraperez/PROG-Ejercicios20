/**
 * Gestión del temporizador
 * @param {Array} MAXDIGITTEMP - Unidades máximas; - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
 * @param {number} MAXUNITTEMP - digito máximo para visualización, 10
 */
class tempHandler {
    constructor(MAXDIGITTEMP, MAXUNITTEMP, viewTemp) {
        this.MAXDIGITTEMP = MAXDIGITTEMP
        this.MAXUNITTEMP = MAXUNITTEMP
        this.viewTemp = viewTemp

        this.temp = new Temporizer(0, 0, 0, 0,
            "", "", "", "",
            false, null, 0, null)

        this.eventStart()

    }
    eventStart() {
        this.viewTemp.startTemporizer.addEventListener("click", (evt) => {
            evt.currentTarget.disabled = true
            this.viewTemp.stopTemporizer.disabled = false
            this.viewTemp.restartTemporizer.disabled = false
            if (!this.temp.stopPressed) {
                this.getTime()
            }

            this.temp.calculateTimeoutTime(this.MAXUNITTEMP[3], this.MAXUNITTEMP[1], this.MAXUNITTEMP[0])
            console.log(this.temp.timeoutTime)

            this.temp.intervalTemporizer = setInterval(this.activateTemporizer, 1000, this.temp, this.MAXDIGITTEMP, this.MAXUNITTEMP, this.viewTemp)
            this.temp.timeoutTemporizer = setTimeout(this.countTime, this.temp.timeoutTime, this.temp, this.viewTemp)

            this.temp.lowerThan10(this.MAXDIGITTEMP)
            this.viewTemp.textTemporizer.innerHTML = this.temp.auxHour + ":" + this.temp.auxMin + ":" + this.temp.auxSec

            if (this.viewTemp.textTemporizer.innerHTML == "00:00:00") {
                this.viewTemp.stopTemporizer.disabled = true
            }
        })

        this.viewTemp.stopTemporizer.addEventListener("click", (evt) => {
            evt.currentTarget.disabled = true
            this.viewTemp.startTemporizer.disabled = false

            this.temp.stopPressed = true

            clearInterval(this.temp.intervalTemporizer)
            clearTimeout(this.temp.timeoutTemporizer)
        })

        this.viewTemp.restartTemporizer.addEventListener("click", (evt) => {
            evt.currentTarget.disabled = true
            this.resetTemporizer()
        })
    }
    countTime(temporizer, viewCount) {
        alert("El temporizador ha terminado")
        clearInterval(temporizer.intervalTemporizer)
        clearTimeout(temporizer.timeoutTemporizer)

        viewCount.textTemporizer.innerHTML = "00:00:00"
    }
    activateTemporizer(temporizer, MAXDIGITTEMP, MAXUNITTEMP, actViewTemp) {

        temporizer.subtractSeconds(MAXUNITTEMP[1], MAXUNITTEMP[2])
        temporizer.lowerThan10(MAXDIGITTEMP)
        actViewTemp.textTemporizer.innerHTML = temporizer.auxHour + ":" + temporizer.auxMin + ":" + temporizer.auxSec

    }
    getTime() {
        this.temp.hour = this.viewTemp.hoursTemporizer.value
        this.temp.min = this.viewTemp.minsTemporizer.value
        this.temp.sec = this.viewTemp.secsTemporizer.value
        this.temp.stopPressed = false
    }
    resetTemporizer() {
        this.viewTemp.stopTemporizer.disabled = true
        this.viewTemp.startTemporizer.disabled = false
        this.temp.stopPressed = false
        clearInterval(this.temp.intervalTemporizer)
        clearTimeout(this.temp.timeoutTemporizer)
        this.viewTemp.hoursTemporizer.value = 0
        this.viewTemp.minsTemporizer.value = 0
        this.viewTemp.secsTemporizer.value = 0
        this.temp.hour = 0
        this.temp.min = 0
        this.temp.sec = 0
        this.viewTemp.textTemporizer.innerHTML = "00:00:00"
    }

}
