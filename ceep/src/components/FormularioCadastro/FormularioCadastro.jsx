
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() =>{//ira pular uma etapa para o estado de update, normalizando digamos o useState,
    if(etapaAtual ===formularios.length-1){
     // console.log(dadosColetados);
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [<DadosUsuarios aoEnviar={coletarDados}/>,  //validacoes={validacoes} />,
  <DadosPessoais aoEnviar={coletarDados}/>,  //validacoes={validacoes}  />,
  <DadosEntrega aoEnviar={coletarDados}/>,  //validacoes={validacoes} />, 
  <Typography variant='h5' color='primary' align='center'>Cadastrado do usuário<strong>
  {' '+dadosColetados.nome + '  '+ dadosColetados.sobrenome+' '} foi feito com sucesso. 
  <br/> Obrigado pelo cadastro! </strong></Typography>  
  ];

  function coletarDados(dados){
    setDados({...dadosColetados,...dados});
  //  console.log(dadosColetados); não funciona corretamente pois o useState é assincrono,
  // ele agenda para fazer no proximo estado, assim ele atrasa um estado
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <Fragment>
      <Stepper activeStep={etapaAtual}>
        <Step> <StepLabel>Login</StepLabel> </Step> 
        <Step> <StepLabel>Pessoal</StepLabel> </Step> 
        <Step> <StepLabel>Endereço</StepLabel> </Step> 
        <Step> <StepLabel>Finalização</StepLabel> </Step> 
        </Stepper>
      {formularios[etapaAtual]}
    </Fragment>
  );
}

/*
pode usar o switch mas ele pode ficar muito grande, 
mas com um array é mais fácil e legível, deixa o codigo mais limpo

 function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuarios aoEnviar={proximaEtapa} />;
      case 1:
        return <DadosPessoais aoEnviar={proximaEtapa} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro ao selecionar formulario</Typography>;
    }
  }
   */


// <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} /> 1
//  <DadosUsuarios/>  0
// <DadosEntrega/>  2

export default FormularioCadastro;
