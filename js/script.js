document.addEventListener("DOMContentLoaded", function() {
    const btnAdicionar = document.getElementById("btnAdicionar");
    const inputNomeContato = document.getElementById("nomeContato");
    const inputNumeroContato = document.getElementById("numeroContato");
    const tabelaContatosBody = document.getElementById("tabelaContatosBody");

    btnAdicionar.addEventListener("click", function() {
        const nome = inputNomeContato.value.trim();
        const numero = inputNumeroContato.value.trim();
        if (nome !== "" && numero !== "") {
            adicionarContato(nome, numero);
            inputNomeContato.value = "";
            inputNumeroContato.value = "";
            inputNomeContato.focus();
        } else {
            alert("Por favor, preencha o nome e o número do contato.");
        }
    });

    function adicionarContato(nome, numero) {
        const newRow = tabelaContatosBody.insertRow();
        const cellIndex = newRow.insertCell(0);
        const cellNome = newRow.insertCell(1);
        const cellNumero = newRow.insertCell(2);
        const cellDelete = newRow.insertCell(3);

        cellNome.textContent = nome;
        cellNumero.textContent = numero;
    }
});
