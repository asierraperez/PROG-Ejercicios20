function iniciaTemporizador() {

    const Temporizer = ObjectTemporizer()

    var temp = new Temporizer(document.getElementById("start_temporizador"),
        document.getElementById("stop_temporizador"),
        document.getElementById("restart_temporizador"),
        false,
        document.getElementById("text_temporizador"), 0, 0, 0, 0, null, 0, null)
    /*var inicio_Temp = 
    var stop_temp = 
    var reset_temp = 
    var tiempo_temp = document.getElementById("text_temporizador")
    var stop_pulsado = false*/

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

        /**
    auxiliar para el display del tiempo.
    en caso de que las unidades sean >10, añadirá un 0 delante
    [0]==horas
    [1]==minutos
    [2]==segundos
    [3]==milisegundos
    */
        var aux_time = ["", "", "", ""]
        //var tiempo_ms = (horas * 3600 * 1000) + (min * 60 * 1000) + (seg * 1000)
        temp.calcularTimeoutTime()
        console.log(temp.timeoutTime)

        temp.intervalTemporizer = setInterval(int_temporizador, 1000, temp)
        temp.timeoutTemporizer = setTimeout(activarTemporizador, temp.timeoutTime, temp)

        temp.sec >= 10 ? aux_time[2] = temp.sec : aux_time[2] = "0" + temp.sec
        temp.min >= 10 ? aux_time[1] = temp.min : aux_time[1] = "0" + temp.min
        temp.hour >= 10 ? aux_time[0] = temp.hour : aux_time[0] = "0" + temp.hour

        temp.time.innerHTML = aux_time[0] + ":" + aux_time[1] + ":" + aux_time[2]
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

    /**
        auxiliar para el display del tiempo.
        en caso de que las unidades sean >10, añadirá un 0 delante
        [0]==horas
        [1]==minutos
        [2]==segundos
        [3]==milisegundos
        */
    var aux_time = ["", "", "", ""]

    if (tiempo.sec != 0) {
        tiempo.sec--
    } else {
        if (tiempo.min == 0) {
            tiempo.hour--
            tiempo.min = 59

        } else {
            tiempo.min--

        }
        tiempo.sec = 59
    }

    tiempo.sec >= 10 ? aux_time[2] = tiempo.sec : aux_time[2] = "0" + tiempo.sec
    tiempo.min >= 10 ? aux_time[1] = tiempo.min : aux_time[1] = "0" + tiempo.min
    tiempo.hour >= 10 ? aux_time[0] = tiempo.hour : aux_time[0] = "0" + tiempo.hour

    tiempo.time.innerHTML = aux_time[0] + ":" + aux_time[1] + ":" + aux_time[2]

}