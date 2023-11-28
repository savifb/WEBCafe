// Define as informações das máquinas
var piccolo = {
    foto: './image/piccolo.jpg',
    preco: 'R$300,00'
};

var inissia = {
    foto: './image/inissia.jpg',
    preco: 'R$400,00'
};

var uc50 = {
    foto: './image/uc50.jpg',
    preco: 'R$450,00'
};

// Seleciona os elementos a serem atualizados
var fotoPiccolo = document.getElementById('piccoloImg');
var precoPiccolo = document.getElementById('piccoloPrice');

var fotoInissia = document.getElementById('inissiaImg');
var precoInissia = document.getElementById('inissiaPrice');

var fotoUC50 = document.getElementById('uc50Img');
var precoUC50 = document.getElementById('uc50Price');

// Atualiza os elementos com as informações das máquinas
fotoPiccolo.src = piccolo.foto;
fotoPiccolo.style.width = '200px';
fotoPiccolo.style.height = 'auto';
precoPiccolo.textContent = piccolo.preco;

fotoInissia.src = inissia.foto;
fotoInissia.style.width = '200px';
fotoInissia.style.height = 'auto';
precoInissia.textContent = inissia.preco;

fotoUC50.src = uc50.foto;
fotoUC50.style.width = '200px';
fotoUC50.style.height = 'auto';
precoUC50.textContent = uc50.preco;