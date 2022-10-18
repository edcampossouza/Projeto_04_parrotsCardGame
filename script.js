const baseImagens = "./imagens/";
const parrots = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "unicornparrot.gif",
];

const opcoes = {};

function selecionaNumeroCartas() {
  let num = 0;
  while (num % 2 !== 0 || num > 14 || num < 4) {
    num = prompt("Com quantas cartas deseja jogar? (numero par entre 4 e 14)");
    num = Number(num);
    if (Number.isNaN(num)) num = 0;
  }

  opcoes.numeroCartas = num;
}

//inicio script

selecionaNumeroCartas();
