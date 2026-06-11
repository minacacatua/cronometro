}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2027-06-24T00:00:00");
const tempoObjetivo2 = new Date("2027-07-11T00:00:00");
const tempoObjetivo3 = new Date("2027-12-18T00:00:00");
const tempoObjetivo4 = new Date("2027-01-10T00:00:00");
const tempoObjetivo1 = new Date("2026-06-24T00:00:00");
const tempoObjetivo2 = new Date("2026-08-09T00:00:00");
const tempoObjetivo3 = new Date("2026-12-25T00:00:00");
const tempoObjetivo4 = new Date("2027-01-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return "Prazo Finalizado";
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();