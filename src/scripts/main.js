AOS.init();

const dataDoevento = new Date("Aug 31, 2024 19:00:00");
const timeStampDoEvento = dataDoevento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOvento % diaEmMs) / horaEmMs);
    const MinutosAteOEvento = Math.floor((distanciaAteOvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOvento % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${MinutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento finalizou'
    }
}, 1000)