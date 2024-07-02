function adicionarUsuario() {
    var nome = document.getElementById("nome").value;
 
    var email = document.getElementById("email").value;
    
    document.getElementById("colunanome").innerText = nome
    
    document.getElementById("colunaemail").innerText = email

    document.getElementById("cadastroForm").reset();
}