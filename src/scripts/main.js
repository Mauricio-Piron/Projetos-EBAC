AOS.init();

const dataDoEvento = new Date("Jul 21, 2024 20:00:00")

/*const dataDoEvento = new Date("Jul 21, 2023 20:00:00")*/

const timeStampDoEnvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const MeuAniversario = timeStampDoEnvento - timeStampAtual;

    const diaEmMs = (1000 * 60 * 60 * 24) 
    const horaEmMs = (1000 * 60 * 60)
    const minEmMs = (1000 * 60 )


    const diasAteAniversario = Math.floor(MeuAniversario / diaEmMs);
    const horasAteAniversario = Math.floor((MeuAniversario % (1000 * 60 * 60 * 24)) / horaEmMs);
    const minutosAteAniversio = Math.floor((MeuAniversario % horaEmMs) / minEmMs);
    const segundosAteAniversio = Math.floor((MeuAniversario % minEmMs) / 1000)

    console.log(diasAteAniversario)
    console.log(horasAteAniversario)
    console.log(minutosAteAniversio)
    console.log(segundosAteAniversio)

    document.getElementById('contador').innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversio}m ${segundosAteAniversio}s`;

    if(MeuAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000);