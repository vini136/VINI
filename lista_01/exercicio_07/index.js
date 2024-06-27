function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        alert("Insira um numero");
        return;
    }

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                alert("por zero não né.");
                return;
            }
            result = number1 / number2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
}