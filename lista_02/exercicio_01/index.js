const formulario = document.getElementById('formulario');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const dados = {
            nome: nome,
            email: email

            };

        });