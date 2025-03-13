import React from "react";
import styled from "styled-components";
import imagem from "./img/fundo-do-espaco_53876-88651.avif"


const Header = styled.header`
background-image: url(${imagem});
background-color: black;
color: white;
height: 150px;
`;

const Footer = styled.footer`
background-image: url(${imagem});
height: 150px;
color: white;
`

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Header><h1>Satellite Store</h1></Header>
        <div>Carrinho</div>
        <div>Produtos</div>
        <div>Filtros</div>
        <Footer><h1>Obrigado pela Visita!</h1></Footer>
      </div>
    )
  }
}


