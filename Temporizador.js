var horas, min, seg


function iniciaTemporizador() {

    class Temporizer {
        constructor(start, stop, reset, stopPressed, time, hour, min, sec,
            intervalTime, intervalTemporizer, timeoutTime, timeoutTemporizer) {
            this.start = start
            this.stop = stop
            this.reset = reset
            this.stopPressed = stopPressed
            this.time = time
            this.hour = hour
            this.min = min
            this.sec = sec
            this.intervalTime = intervalTime
            this.intervalTemporizer = intervalTemporizer
            this.timeoutTime = timeoutTime
            this.timeoutTemporizer = timeoutTemporizer

        }
    }
    var temp = new Temporizer(document.getElementById("start_temporizador"),
        document.getElementById("stop_temporizador"),
        document.getElementById("restart_temporizador"),
        false,
        document.getElementById("text_temporizador"),
        document.getElementById("horas_temporizador").value,
        document.getElementById("minutos_temporizador").value,
        document.getElementById("segundos_temporizador").value,
        0, null, 0, null)
    /*var inicio_Temp = 
    var stop_temp = 
    var reset_temp = 
    var tiempo_temp = document.getElementById("text_temporizador")
    var stop_pulsado = false*/

    inicio_Temp.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        stop_temp.disabled = false
        reset_temp.disabled = false
        if (!stop_pulsado) {
            horas = document.getElementById("horas_temporizador").value
            min = document.getElementById("minutos_temporizador").value
            seg = document.getElementById("segundos_temporizador").value
            stop_pulsado = false
        }
        var aux_hora, aux_min, aux_seg
        var tiempo_ms = (horas * 3600 * 1000) + (min * 60 * 1000) + (seg * 1000)
        console.log(tiempo_ms)

        intervalo_temporizador = setInterval(int_temporizador, 1000, tiempo_temp)
        temporizador_temporizador = setTimeout(activarTemporizador, tiempo_ms, tiempo_temp)

        seg > 10 ? aux_seg = seg : aux_seg = "0" + seg
        min > 10 ? aux_min = min : aux_min = "0" + min
        horas > 10 ? aux_hora = horas : aux_hora = "0" + horas

        tiempo_temp.innerHTML = aux_hora + ":" + aux_min + ":" + aux_seg
        if (tiempo_temp.innerHTML == "00:00:00") {
            stop_temp.disabled = true
        }
    })

    stop_temp.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        inicio_Temp.disabled = false

        stop_pulsado = true

        clearInterval(intervalo_temporizador)
        clearInterval(temporizador_temporizador)
    })

    reset_temp.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true
        stop_temp.disabled = true
        inicio_Temp.disabled = false
        stop_pulsado = false
        clearInterval(intervalo_temporizador)
        clearInterval(temporizador_temporizador)
        document.getElementById("horas_temporizador").value = 0
        document.getElementById("minutos_temporizador").value = 0
        document.getElementById("segundos_temporizador").value = 0
        horas = 0
        min = 0
        seg = 0
        tiempo_temp.innerHTML = "00:00:00"

    })


}

function activarTemporizador(tiempo, stop_deshabilitado) {
    alert("El temporizador ha terminado")
    clearInterval(intervalo_temporizador)
    clearInterval(temporizador_temporizador)

    tiempo.innerHTML = "00:00:00"
}

function int_temporizador(tiempo) {

    var html_h, html_m, html_s

    if (seg != 0) {
        seg--
    } else {
        if (min == 0) {
            horas--
            min = 59

        } else {
            min--

        }
        seg = 59
    }

    seg > 10 ? html_s = seg : html_s = "0" + seg
    min > 10 ? html_m = min : html_m = "0" + min
    horas > 10 ? html_h = horas : html_h = "0" + horas

    tiempo.innerHTML = html_h + ":" + html_m + ":" + html_s

}