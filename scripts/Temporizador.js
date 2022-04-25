function iniciaTemporizador(temp_time) {

    const Temporizer = ObjectTemporizer(temp_time)

    var temp = new Temporizer(0, 0, 0, 0,
        document.getElementById("text_temporizador"),
        "", "", "", "",
        document.getElementById("start_temporizador"),
        document.getElementById("stop_temporizador"),
        document.getElementById("restart_temporizador"),
        false, null, 0, null)

    temp.start.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        temp.stop.disabled = false
        temp.reset.disabled = false
        if (!temp.stopPressed) {
            temp.hour = document.getElementById("horas_temporizador").value
            temp.min = document.getElementById("minutos_temporizador").value
            temp.sec = document.getElementById("segundos_temporizador").value
            temp.stopPressed = false
        }

        temp.calcularTimeoutTime()
        console.log(temp.timeoutTime)

        temp.intervalTemporizer = setInterval(int_temporizador, 1000, temp)
        temp.timeoutTemporizer = setTimeout(activarTemporizador, temp.timeoutTime, temp)

        temp.menorQue10()
        temp.time.innerHTML = temp.aux_hour + ":" + temp.aux_min + ":" + temp.aux_sec

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
        document.getElementById("horas_temporizador").value = 0
        document.getElementById("minutos_temporizador").value = 0
        document.getElementById("segundos_temporizador").value = 0
        temp.hour = 0
        temp.min = 0
        temp.sec = 0
        temp.time.innerHTML = "00:00:00"

    })


}

function activarTemporizador(tiempo) {
    alert("El temporizador ha terminado")
    clearInterval(tiempo.intervalTemporizer)
    clearTimeout(tiempo.timeoutTemporizer)

    tiempo.time.innerHTML = "00:00:00"
}

function int_temporizador(tiempo) {

    tiempo.RestarSegundos()
    tiempo.menorQue10()

    tiempo.time.innerHTML = tiempo.aux_hour + ":" + tiempo.aux_min + ":" + tiempo.aux_sec

}