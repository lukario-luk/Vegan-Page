import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import forkKnife from "../assets/Fork-Knife-icon.png" 
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`;

const ListItem = styled.li`
  height:5.5vh;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#006400;
  font-size:2.5em;
  font-family: 'Italianno', cursive;
  &:hover {
    text-decoration:underline red solid 3px;
  }
`;

const List = styled.ul`
  width: 100%;
  height:15vh;
  padding: 3%;
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  list-style: none;
  background-color: white;
  font-family: 'Italianno', cursive;
  img{
    position:absolute;
    right:7%;
    width:12vh;
  }
`;

function Header() {
  return (
    <List>
      <GlobalStyle/>
      <ListItem id="id">Inicio</ListItem>
      <ListItem>Contatos</ListItem>
      <ListItem>Receitas</ListItem>
      <img src={forkKnife} alt="icone azul claro de um garfo e uma faca formando um X; voltados pra cima, o garfo com a base em a esquerda apontando para nordeste e a faca a direita apontando para noroeste."/>
    </List>
  );
}

export default Header;
