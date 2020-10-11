
import React, { createContext } from 'react';

const ValidacoesCadastro= React.createContext({ 
    cpf: semValidacao, 
    senha: semValidacao 
});

function semValidacao(dados){
    console.log(dados);
    return {valido: true, texto:''}
}
//estado deafault por padrao, ele so sera utilizado se vc nao tiver o Provider

export default ValidacoesCadastro;