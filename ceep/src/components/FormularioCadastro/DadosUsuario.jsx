import { Button, TextField } from '@material-ui/core';
import React,{ useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

export default function DadosUsuarios({aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] =useErros(validacoes);
    /*
    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });
    function validarCampos(evento){
        const{name,value}= evento.target;
        const ehValido = validacoes[name](value);// apartir do objeto validacoes, pegando o campo(target) com o nome> enviando o valor
        const novoEstado = {...erros}
        novoEstado[name] = ehValido;
        setErros(novoEstado);
    }
  

    function possoEnviar(){ 
        for(let campo in erros){
          if (!erros[campo].valido){
              return false;
          }
        }
        return true;
    }
    */

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if(possoEnviar()){
            aoEnviar({email, senha});
            }
        }}>

            <TextField
                value={email}
                onChange={(evento) => {
                    evento.preventDefault();
                    setEmail(evento.target.value);
                    
                }}
                id='email'
                name='email'
                label="Email"
                type='email'
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <TextField
                value={senha}
                onChange={(evento) => {
                    evento.preventDefault();
                    setSenha(evento.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id='senha'
                name='senha'
                label='senha'
                type='password'
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <Button type='submit'variant="contained" color="primary" >Cadastrar</Button >

        </form>
    );
}