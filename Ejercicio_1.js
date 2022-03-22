var h = 0
var m = 0
var s = 0
var ms = 0

function iniciaCronometro() {
    var startCrono = document.getElementById("start_cronometro")



    var start_pulsado = false
    startCrono.addEventListener("click", (evt) => {
        if (!start_pulsado) {
            start_pulsado = true
            startCrono.innerHTML = "Pausar"
            intervalo_cronometro = window.setInterval(activarCrono, 100)
        } else {
            start_pulsado = false
            startCrono.innerHTML = "Start"
            clearInterval(intervalo_cronometro)
        }


    })

}

function activarCrono() {
    var crono = document.getElementById("text_cronometro")
    var aux_h, aux_m, aux_s, aux_ms

    ms++
    if (ms > 9) {
        s++
        ms = 0

    }
    if (s > 59) {
        m++
        s = 0
    }
    if (m > 59) {
        h++
        m = 0
    }

    ms > 10 ? aux_ms = ms : aux_ms = "0" + ms
    s > 10 ? aux_s = s : aux_s = "0" + s
    m > 10 ? aux_m = m : aux_m = "0" + m
    h > 10 ? aux_h = h : aux_h = "0" + h

    crono.innerHTML = aux_h + ":" + aux_m + ":" + aux_s + ":" + aux_ms
}
