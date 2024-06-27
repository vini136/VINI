function verificarIdade() {
    var inputIdade = document.getElementById("idade").value;
    var idade = parseInt(inputIdade);

    if (idade >= 18) {
        document.getElementById("mensagem").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("mensagem").innerText = "Você é menor de idade.";
    }
}