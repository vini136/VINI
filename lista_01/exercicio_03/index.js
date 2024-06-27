
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    let anonas = document.getElementById("nascimento").value

    document.getElementById("resultado").innerText = 2024 - anonas
})