// VARIÁVEIS DOS LINKS -- DIRECIONANDO O LINK PARA A JANELA
var linkDolceGusto = document.getElementById('dolce-gusto');
var linkSenseo = document.getElementById('senseo');
var linkNespresso = document.getElementById('nespresso');




// quando clica abre a janela e exibe as informações sobre os sachês
linkDolceGusto.addEventListener('click', function(event) {
    abrirJanela(event, dolceGusto);
});
linkNespresso.addEventListener('click', function(event) {
    abrirJanela(event, nespresso);
});
linkSenseo.addEventListener('click', function(event) {
    abrirJanela(event, senseo);
});

// Informações sobre os sachês - lista de PRODUTOS PARA CADA LINK
var dolceGusto = {
    nome: 'Dolce Gusto',
    quantidade: 'Caixa 16 capsulas',
    produtos: [
        { nome: 'Expresso 96g', preco: 'R$ 24,00' },
        { nome: 'Descafeinado 96g', preco: 'R$ 21,00' }
    ]
};
var senseo = {
    nome: 'Senseo',
    quantidade: 'Caixa 18 sachês',
    produtos: [
        {
            nome: "Clássico 120g",
            preco: 'R$ 14,00'
        },
        {
            nome: "Intenso 120g",
            preco: 'R$ 14,00'
        }
    ]
}
var nespresso = {
    nome: 'Nesresso', 
    quantidade: 'Caixa 20 capsulas',
    produtos: [
        {
            nome: 'Ristretto', 
            preco: 'R$ 42,00'
        },
        {
            nome: 'Livanto',
            preco: 'R$ 35,00',
        },
        {
            nome: 'Vanillo',
            preco: 'R$ 46,00',
        }
    ]
}

// ABRIR JANELA COM AS INFORMAÇÕES SOBRE OS SACHÊS

function abrirJanela(event, info) {
    event.preventDefault();

    var janela = window.open('', '', 'width=280,height=530');

    // Exibe as informações sobre os sachês
    janela.document.write('<h1>' + info.nome + '</h1>');
    janela.document.write('<p>Quantidade de sachês: ' + info.quantidade + '</p>');
    janela.document.write('<img src="./image/cafe.jpg" width="250" height="100" alt="Imagem da caixa">'); // especifico do exercício - não altere
    janela.document.write('<p>Lista de produtos:</p>');
    info.produtos.forEach(function(produto) {
        janela.document.write('<p>' + produto.nome + ': ' + produto.preco + '</p>');
    });
    janela.document.write('<button onclick="window.close()">Fechar</button>');
}
