function iniciaTemporizador() {

    //const Temporizer = ObjectTemporizer(temp_time)

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
            temp.hour = document.getElementById("hoursTemporizer").value
            temp.min = document.getElementById("minsTemporizer").value
            temp.sec = document.getElementById("secsTemporizer").value
            temp.stopPressed = false
        }

        temp.calculateTimeoutTime()
        console.log(temp.timeoutTime)

        temp.intervalTemporizer = setInterval(activateTemporizer, 1000, temp)
        temp.timeoutTemporizer = setTimeout(countTime, temp.timeoutTime, temp)

        temp.menorQue10()
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
        temp.stop.disabled = true
        temp.start.disabled = false
        temp.stopPressed = false
        clearInterval(temp.intervalTemporizer)
        clearTimeout(temp.timeoutTemporizer)
        document.getElementById("hoursTemporizer").value = 0
        document.getElementById("minsTemporizer").value = 0
        document.getElementById("secsTemporizer").value = 0
        temp.hour = 0
        temp.min = 0
        temp.sec = 0
        temp.time.innerHTML = "00:00:00"

    })


}

function countTime(temporizer) {
    alert("El temporizador ha terminado")
    clearInterval(temporizer.intervalTemporizer)
    clearTimeout(temporizer.timeoutTemporizer)

    temporizer.time.innerHTML = "00:00:00"
}

function activateTemporizer(temporizer) {

    temporizer.subtractSeconds()
    temporizer.lowerThan10()

    temporizer.time.innerHTML = temporizer.auxHour + ":" + temporizer.auxMin + ":" + temporizer.auxSec

}