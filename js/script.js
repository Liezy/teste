document.addEventListener("DOMContentLoaded", function() {
    const btnAdicionar = document.getElementById("btnAdicionar");
    const inputNomeContato = document.getElementById("nomeContato");
    const inputNumeroContato = document.getElementById("numeroContato");
    const tabelaContatosBody = document.getElementById("tabelaContatosBody");
    let contatoIndex = 1;

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

    tabelaContatosBody.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-deletar")) {
            const row = event.target.closest("tr");
            tabelaContatosBody.deleteRow(row.rowIndex - 1);
            // Atualiza os índices dos contatos após a exclusão
            atualizarIndices();
        }
    });

    function adicionarContato(nome, numero) {
        const newRow = tabelaContatosBody.insertRow();
        const cellIndex = newRow.insertCell(0);
        const cellNome = newRow.insertCell(1);
        const cellNumero = newRow.insertCell(2);
        const cellDelete = newRow.insertCell(3);

        cellIndex.textContent = contatoIndex;
        cellNome.textContent = nome;
        cellNumero.textContent = numero;
        cellDelete.innerHTML = '<button class="btn btn-danger btn-deletar">Deletar</button>';

        contatoIndex++;
    }

    function atualizarIndices() {
        const linhas = tabelaContatosBody.rows;
        for (let i = 0; i < linhas.length; i++) {
            linhas[i].cells[0].textContent = i + 1;
        }
        contatoIndex = linhas.length + 1;
    }
});


















