// Seleciona os links
var linkDolceGusto = document.getElementById('dolce-gusto');
var linkSenseo = document.getElementById('senseo');
var linkNespresso = document.getElementById('nespresso');

// quando clica abre a janela
linkDolceGusto.addEventListener('click', abrirJanela);
linkSenseo.addEventListener('click', abrirJanela);
linkNespresso.addEventListener('click', abrirJanela);

function abrirJanela(event) {
    event.preventDefault();

    var janela = window.open('', '', 'width=280,height=530');

    // Exibe as informações sobre os sachês
    janela.document.write('<h1>' + this.textContent + '</h1>');
    janela.document.write('<p>Quantidade de sachês: </p>');
    janela.document.write('<img src="./image/cafe.jpg" widht="5px" alt="Imagem da caixa">');
    janela.document.write('<p>Lista de produtos: ...</p>');
    janela.document.write('<button onclick="window.close()">Fechar</button>');
}