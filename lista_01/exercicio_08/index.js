function countWords() {
    const text = document.getElementById('text').value.trim();
    if (text === "") {
        document.getElementById('result').innerText = "Número de palavras: 0";
        return;
    }
    const words = text.split(/\s+/);
    document.getElementById('result').innerText = `Número de palavras: ${words.length}`;
}