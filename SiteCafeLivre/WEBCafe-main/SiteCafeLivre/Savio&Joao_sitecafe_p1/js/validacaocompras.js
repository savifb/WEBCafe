var formulario = document.getElementById("compras");

formulario.addEventListener("submit", function(event){
    var entradas = formulario.querySelectorAll("input, select, textarea");
    for(var i = 0; i < entradas.length; i++){
        if(entradas[i].value===''){
            alert("Por Favor, preencha todos os campos")
            event.preventDefault();
            return;
    
    }
}
    alert("Compra realizada com sucesso!")

});