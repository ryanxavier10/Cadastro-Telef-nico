const form = document.getElementById('form');
const imgCorreto = '<img src="./img/correto.png" alt="icone de correto"/>';
const imgErrado = '<img src="./img/errado.png" alt="icone de erro"/>';
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    cadastroRealizado();
});

function adicionaLinha() {
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputNumeroCadastro = document.getElementById('numero-cadastro');

    if (nomes.includes(inputNomeCadastro.value)){
        alert(`O nome ${inputNomeCadastro.value} já foi inserido `);
        alert(`O número de telefonhe:  ${inputNumeroCadastro.value} já foi inserido `);
    } else {
        nomes.push(inputNomeCadastro.value);
        telefones.push(parseFloat(inputNomeCadastro.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeCadastro.value}</td>`;
        linha += `<td>${inputNumeroCadastro.value}</td>`;
        linha += `<td>${inputNumeroCadastro.value = inputNumeroCadastro ? imgCorreto : imgErrado}</td>`;


        linhas += linha;
    }

    inputNomeCadastro.value = '';
    inputNumeroCadastro.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function cadastroRealizado(){
    const cadastroFeito = cadastroFinal();

    document.getElementById('telefone').innerHTML = cadastroFeito.toFixed(2);
}
