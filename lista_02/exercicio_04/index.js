function adicionarUsuario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    var table = document.getElementById("tabelaUsuarios");
    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = email;
    document.getElementById("cadastroForm").reset();
}