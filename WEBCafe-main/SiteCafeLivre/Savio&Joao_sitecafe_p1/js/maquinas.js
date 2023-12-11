var maquinas = {
    piccolo: {
        foto: './image/piccolo.jpg',
        preco: 'R$300,00'
    },
    inissia: {
        foto: './image/inissia.jpg',
        preco: 'R$400,00'
    },
    uc50: {
        foto: './image/uc50.jpg',
        preco: 'R$450,00'
    },
    hd7811: {
        foto: './image/senseo.jpg',
        preco: 'R$250,00'
    }
};
// Seleciona todos os links de modelo
var modelos = document.querySelectorAll('.modelo');

// Seleciona a célula da foto e do preço
var fotoCell = document.querySelector('#rowPiccolo .foto img');
var precoCell = document.querySelector('#rowPiccolo .preco');

// Adiciona ouvintes de eventos a todos os links de modelo
modelos.forEach(function(modelo) {
    modelo.addEventListener('click', function(event) {
        event.preventDefault();

        // Obtém o modelo correspondente
        var modeloData = maquinas[this.dataset.modelo];

        // Atualiza a foto e o preço
        fotoCell.src = modeloData.foto;
        fotoCell.style.display = 'block'; // Mostra a imagem
        fotoCell.style.width = '75%'; // Especifico do exercício - não altere
        fotoCell.style.margin = 'auto'; // Centraliza a imagem
        precoCell.innerHTML = modeloData.preco;
    });
});