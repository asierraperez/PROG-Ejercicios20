/**
 * Gestión del temporizador
 * @param {Array} MAXDIGITTEMP - Unidades máximas; - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
 * @param {number} MAXUNITTEMP - digito máximo para visualización, 10
 */
function initiateTemporizador(MAXDIGITTEMP, MAXUNITTEMP) {
    /**
     * funciones y atributos intrínsecos al temporizador
     * @type {object}
     */
    var temp = new Temporizer(0, 0, 0, 0,
        document.getElementById("textTemporizer"),
        "", "", "", "",
        document.getElementById("startTemporizer"),
        document.getElementById("stopTemporizer"),
        document.getElementById("restartTemporizer"),
        false, null, 0, null)

    temp.start.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        temp.stop.disabled = false
        temp.reset.disabled = false
        if (!temp.stopPressed) {
            getTime(temp)
        }

        temp.calculateTimeoutTime(MAXUNITTEMP[3], MAXUNITTEMP[1], MAXUNITTEMP[0])
        console.log(temp.timeoutTime)

        temp.intervalTemporizer = setInterval(activateTemporizer, 1000, temp, MAXDIGITTEMP, MAXUNITTEMP)
        temp.timeoutTemporizer = setTimeout(countTime, temp.timeoutTime, temp)

        temp.lowerThan10(MAXDIGITTEMP)
        temp.time.innerHTML = temp.auxHour + ":" + temp.auxMin + ":" + temp.auxSec

        if (temp.time.innerHTML == "00:00:00") {
            temp.stop.disabled = true
        }
    })

    temp.stop.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        temp.start.disabled = false

        temp.stopPressed = true

        clearInterval(temp.intervalTemporizer)
        clearTimeout(temp.timeoutTemporizer)
    })

    temp.reset.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        resetTemporizer(temp)
    })


}
/**
 * alarma para cuando termina la cuenta atrás
 * @param {object} temporizer - Datos y funciones intrínsecas al temporizador
 */
function countTime(temporizer) {
    alert("El temporizador ha terminado")
    clearInterval(temporizer.intervalTemporizer)
    clearTimeout(temporizer.timeoutTemporizer)

    temporizer.time.innerHTML = "00:00:00"
}
/**
 * Gestión del temporizador
 * @param {object} temporizer - Datos y funciones intrínsecas al temporizador
 * @param {*} MAXDIGITTEMP - digito máximo para visualización, 10
 * @param {*} MAXUNITTEMP - Unidades máximas; 
 * - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR]
 */
function activateTemporizer(temporizer, MAXDIGITTEMP, MAXUNITTEMP) {

    temporizer.subtractSeconds(MAXUNITTEMP[1], MAXUNITTEMP[2])
    temporizer.lowerThan10(MAXDIGITTEMP)

    temporizer.time.innerHTML = temporizer.auxHour + ":" + temporizer.auxMin + ":" + temporizer.auxSec

}

/**
 * obtener tiempo
 * @param {object} tempGetTime - Datos y funciones intrínsecas al temporizador
 */
function getTime(tempGetTime) {
    tempGetTime.hour = document.getElementById("hoursTemporizer").value
    tempGetTime.min = document.getElementById("minsTemporizer").value
    tempGetTime.sec = document.getElementById("secsTemporizer").value
    tempGetTime.stopPressed = false
}

/**
 * reset del temporzador
 * @param {object} tempReset - Datos y funciones intrínsecas al temporizador
 */
function resetTemporizer(tempReset) {
    tempReset.stop.disabled = true
    tempReset.start.disabled = false
    tempReset.stopPressed = false
    clearInterval(tempReset.intervalTemporizer)
    clearTimeout(tempReset.timeoutTemporizer)
    document.getElementById("hoursTemporizer").value = 0
    document.getElementById("minsTemporizer").value = 0
    document.getElementById("secsTemporizer").value = 0
    tempReset.hour = 0
    tempReset.min = 0
    tempReset.sec = 0
    tempReset.time.innerHTML = "00:00:00"
}