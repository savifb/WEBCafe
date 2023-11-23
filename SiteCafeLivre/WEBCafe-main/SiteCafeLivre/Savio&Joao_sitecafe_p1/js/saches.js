// Seleciona os links
var linkExpresso= document.getElementById('expresso');
var linkDescafeinado = document.getElementById('descafeinado');
var linkLivanto = document.getElementById('livanto');
var linkClassico = document.getElementById('classico');
var linkIntenso = document.getElementById('intenso');
var linkRistreto = document.getElementById('ristreto');
var linkVanillo = document.getElementById('vanillo');

// quando clica abre a janela
linkExpresso.addEventListener('click', abrirJanela);
linkDescafeinado.addEventListener('click', abrirJanela);
linkLivanto.addEventListener('click', abrirJanela);
linkClassico.addEventListener('click', abrirJanela);
linkIntenso.addEventListener('click', abrirJanela);
linkRistreto.addEventListener('click', abrirJanela);
linkVanillo.addEventListener('click', abrirJanela);

function abrirJanela(event) {
    event.preventDefault();

    var janela = window.open('', '', 'width=280,height=530');

    // Exibe as informações sobre os sachês
    janela.document.write('<h1>' + this.textContent + '</h1>');
    janela.document.write('<p>Quantidade de sachês:</p>');
    janela.document.write('<img src="..." alt="Imagem da caixa">');
    janela.document.write('<p>Lista de produtos: ...</p>');
    janela.document.write('<button onclick="window.close()">Fechar</button>');
}