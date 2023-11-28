// codigo savio -- VALIDAÇÃO DE CPF
function validarCPF() {
    var cpf = document.getElementById('cpf').value;

    //  SE O CPF NÃO TIVER 11 DIGITOS
    if (cpf.length != 11) {
        alert('CPF inválido: o CPF deve ter 11 dígitos.');
        return;
    }

    // AQUI É PARA SABER SE SÓ TEM NÚMEROS
    if (!/^\d+$/.test(cpf)) {
        alert('CPF inválido: o CPF deve conter apenas números.');
        return;
    }

    // Verifica se o CPF não contém todos os dígitos iguais
    if (/^(\d)\1+$/.test(cpf)) {
        alert('CPF inválido: o CPF não pode conter todos os dígitos iguais.');
        return;
    }

    var total = 0;
    for (var i = 0; i < 9; i++) {
        total += cpf[i] * (10 - i);
    }
    var primeiroDigito = (total * 10) % 11;
    if (primeiroDigito === 10) primeiroDigito = 0;

    total = 0;
    for (var i = 0; i < 10; i++) {
        total += cpf[i] * (11 - i);
    }
    var segundoDigito = (total * 10) % 11;
    if (segundoDigito === 10) segundoDigito = 0;

    if (cpf[9] != primeiroDigito || cpf[10] != segundoDigito) {
        alert('CPF inválido: os dígitos de verificação estão incorretos.');
        return;
    }

    // Se chegou até aqui, o CPF é válido
    alert('CPF válido.');
}
// CÓDIGO -- DECLARAÇÃO DE PREÇOS E CARRINHO
// ABA PRODUTOS CAFÉ
var precos = {
    'Piccolo': 100.00,
    'Inissia C40': 200.00,
    'UC50': 150.00,
    'HD7811/98': 120.00,
    'Expresso': 1.00,
    'Descafeinado': 1.50,
    'Livanto': 1.20,
    'Ristretto': 1.30,
    'Vanilio': 1.40,
    'Classico': 1.10,
    'Intenso': 1.20
};
// CRIEI UMA ARRAY PARA ARMAZENAR OS PRODUTOS INCLUIDOS NO BOTAO
// POIS IRÁ UTILIZAR PARA SOMA DO TOTAL E PARA EXCLUIR
// 
var carrinho = [];

function adicionarAoCarrinho(event, tipo) {
    event.preventDefault();

    var select = document.getElementById(tipo);
    var produto = select.options[select.selectedIndex].value;

    // ADICIONA PRODUTO NO ARRAY CARRINHO
    carrinho.push(produto);

    // INSERE NA LISTA DE COMPRA OU EXCLUI
    atualizarCarrinho();
}

function removerDoCarrinho(event, tipo) {
    event.preventDefault();

    var select = document.getElementById(tipo);
    var produto = select.options[select.selectedIndex].value;

    // Remove o produto do carrinho
    var index = carrinho.indexOf(produto);
    if (index > -1) {
        carrinho.splice(index, 1);
    }

    // EXLUI DA LISTA DE COMPRA
    atualizarCarrinho();
}
// FUNÇÃO PARA ATUALIZAR O CARRINHO - LISTA DE COMPRAS 
// VAI 
function atualizarCarrinho() {
    var lista = document.getElementById('lista');
    var total = document.getElementById('total');

    // PRA QUE ISSO????
    lista.value = '';
    total.value = 0;

    // VAMOS ADICIONAR E 'PRINTAR' NO TOTAL O VALOR DOS PRODUTOS ADICIONADOS
    // PRA ISSO PRECISA CONVERTER O VALOR PARA FLOAT POIS ESTAVA EM STRING
    for (var i = 0; i < carrinho.length; i++) {
        lista.value += carrinho[i] + '\n';
        total.value = parseFloat(total.value) + precos[carrinho[i]];
    }
     // QUERO QUE SEJA APENAS DUAS CASAS DECIMAIS	
     total.value = parseFloat(total.value).toFixed(2);
}