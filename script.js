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
const arrayImagens = [];
const container = document.querySelector(".container");

function selecionaNumeroCartas() {
  let num = 0;
  while (num % 2 !== 0 || num > 14 || num < 4) {
    num = prompt("Com quantas cartas deseja jogar? (numero par entre 4 e 14)");
    num = Number(num);
    if (Number.isNaN(num)) num = 0;
  }

  opcoes.numeroCartas = num;
}

function carregaCartas() {
  for (let i = 0; i < arrayImagens.length; i++) {
    const imgParrot = document.createElement("img");
    imgParrot.src = `./images/${arrayImagens[i]}`;
    const imgPadrao = document.createElement("img");
    imgPadrao.src = "./images/back.png";
    //card
    const card = document.createElement("div");
    card.classList.add("card");

    //face (frente)
    const frente = document.createElement("div");
    frente.classList.add("face");
    frente.classList.add("front-face");
    frente.appendChild(imgPadrao);

    //face (verso)
    const verso = document.createElement("div");
    verso.classList.add("face");
    verso.classList.add("back-face");
    verso.appendChild(imgParrot);

    //insere as duas faces no card
    card.appendChild(frente);
    card.appendChild(verso);

    card.onclick = function () {
      viraCarta(card);
    };

    container.appendChild(card);
  }
}

function inicializaCartas() {
  for (let i = 0; i < opcoes.numeroCartas / 2; i++) {
    arrayImagens.push(parrots[i]);
    arrayImagens.push(parrots[i]);
  }

  //embaralha as cartas
  arrayImagens.sort(function () {
    return Math.random() - 0.5;
  });

  carregaCartas();
}

function viraCarta(carta) {
  const back = carta.querySelector(".back-face");
  const front = carta.querySelector(".front-face");
  back.classList.toggle("show");
  front.classList.toggle("hide");
}

//inicio script

selecionaNumeroCartas();
inicializaCartas();
