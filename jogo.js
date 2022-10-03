let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;

let criaTempo = 1500;

let difi = window.location.search;
difi = difi.replace('?', '');

if (difi === 'facil') {
    criaTempo = 1500;
} else if (difi === 'dificil') {
    criaTempo = 1000
    tempo = 8
} else if (difi === 'dd') {
    criaTempo = 800;
    tempo = 4
}


function ajustarTamanhoNavegador() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}
ajustarTamanhoNavegador();

let cronometro = setInterval(function () {
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
        //alert('Voce ganhou')
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'fim_do_jogo.html';
        }
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++;
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    let posiX = posicaoX < 0 ? 0 : posicaoX;
    let posiY = posicaoY < 0 ? 0 : posicaoY;
    console.log(posicaoX, posicaoY);

    //criar o elemnto html
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posiX + 'px';
    mosquito.style.top = posiY + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }

}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito-1';

        case 1:
            return 'mosquito-2';

        case 2:

            return 'mosquito-3';
    }
}
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';

    }
}