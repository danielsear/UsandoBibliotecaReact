
function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 digitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSenha(senha) {

    if (senha.length < 4 || senha.length > 12) {
        return { valido: false, texto: "A senha deve ter de 4 à 12 dígitos" }
    } else {
        return { valido: true, texto: "" }
    }
}
/*
function validarCEP(cep) {
    console.log(cep);
    const cepNumero = cep.replace(/\D/g, "");

    const url = `http://viacep.com.br/ws/${cepNumero}/json/`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8"
        }
    };
    const input = document.getElementById('cep');
    const classeElementoErro = 'erro-validacao';
    const classeInputErro = "possui-erro-validacao";
    const elementoPai = input.parentNode;
    const elementoErroExiste = elementoPai.querySelector(`.${classeElementoErro}`);
    const elementoErro = elementoErroExiste || document.createElement('div');

    fetch(url, options).then(response => response.json()).then(data => {
        if (data.erro) {
           
            return  { valido: false, texto: 'Cep incorreto' };
        }
        const campoLogradouro = document.getElementById("endereco");
        const campoCidade = document.getElementById("cidade");
        const campoEstado = document.getElementById("estado");
        campoLogradouro.value = data.logradouro;
        campoCidade.value = data.localidade;
        campoEstado.value = data.uf;
        return;
    });

}
*/

export { validarCPF, validarSenha };