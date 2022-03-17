var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2019/09/Ash_Bulbasaur.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var cartaGui = {
    nome: "Darth Vader",
    imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var cartaPaulo = {
    nome: "Shiryu de dragão",
    imagem: "https://img.elo7.com.br/product/zoom/2B30902/camiseta-shiryu-de-dragao-fullprint-nerd.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartaJogador;
var cartaMaquina;
var cartas = [cartaRafa, cartaGui, cartaPaulo];

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}