// primeira coisa é importar os componentes do React

import React from 'react';
import '../stylesheets/testemunhos.css';

function Testemunhos(props){
  return(
    <div className='container-testemunhos'>
      <img 
        className='img-testemunho' 
        src={require(`../imagens/img-test-${props.imagem}.png`)}
        alt='Foto de Emma' />
      <div className='box-texto-testemunho'>
        <p className='nome-testemunho'><strong>{props.nome}</strong> en {props.pais}</p>
        <p className='cargo-testemunho'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testemunho'>"{props.testemunho}"</p>
      </div>
    </div>

  );
}

export default Testemunhos;