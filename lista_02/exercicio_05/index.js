function adicionarUsuario() {
    if (document.getElementById ("codigo").value)
        {
            edit ()
        } else {
            create ()
        }
    document.getElementById("formulario").reset();
}
function edit () {
    var table = document.getElementById("tabelaUsuarios");
    var linha = table.rows [document.getElementById ("codigo").value]
    linha.cells [0].innerHTML = document.getElementById ("nome").value
    linha.cells [1].innerHTML = document.getElementById ("email").value
}

function create () {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
    
        var table = document.getElementById("tabelaUsuarios");
        var newRow = table.insertRow(-1);
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        
        var bot = document.createElement("button")
        bot.innerHTML = "Editar"
        bot.addEventListener ("click", function(){
            var linha = this.parentNode.parentNode
    
            document.getElementById ("nome").value = linha.cells [0].innerHTML
            document.getElementById("email").value = linha.cells [1].innerHTML
            document.getElementById ("codigo").value = linha.rowIndex
        })
        cell1.innerHTML = nome;
        cell2.innerHTML = email;
        cell3.appendChild (bot)



}