import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes= useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    /*
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
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
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name='cpf'
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        color="primary"
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
      </Button>
        </form>
    );
}

export default DadosPessoais;
