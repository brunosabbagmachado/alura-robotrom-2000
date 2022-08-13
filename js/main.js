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
        console.log(elemento.dataset.estatistica);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })

}

botao.addEventListener('click', function () {

    var corAmarelo = 'img/Robotron 2000 - Amarelo.png';
    var corAzul = 'img/Robotron 2000 - Azul.png';
    var corBranco = 'img/Robotron 2000 - Branco.png';
    var corPreto = 'img/Robotron 2000 - Preto.png';
    var corRosa = 'img/Robotron 2000 - Rosa.png';
    var corVermelho = 'img/Robotron 2000 - Vermelho.png';
    

    if (robo.src = corAzul) {
        robo.src = corBranco;
    }
})

