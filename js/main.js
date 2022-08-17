document.querySelector('#musica-tema').play();

const controle = document.querySelectorAll('[data-controle]');

const estatisticas = document.querySelectorAll('[data-estatistica');

const robo = document.querySelector('.robo');

const botao = document.querySelector('.botao-cor');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

var i = 0;

var coresRobo = [
    'img/Robotron 2000 - Azul.png',
    'img/Robotron 2000 - Amarelo.png',
    'img/Robotron 2000 - Rosa.png',
    'img/Robotron 2000 - Vermelho.png',
    'img/Robotron 2000 - Branco.png',
    'img/Robotron 2000 - Preto.png'
]


controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        //console.log(elemento.dataset.estatistica, elemento.textContent);
    })

}

botao.addEventListener('click', function () {
    i++;
    robo.src = coresRobo[i];
    if (i == coresRobo.length - 1) {
        i = -1;
    }
})

