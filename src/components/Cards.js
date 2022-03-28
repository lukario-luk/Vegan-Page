import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "../App.css"
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family: 'Lora', serif;
}
`;
const Wrapper = styled.div`
width:100%;
`
const Container = styled.div`
  width: max(60vw, 265px);  
  padding: 1.5%;
  margin:2%;
  box-shadow: 1px 1px 6px 0px rgb(166, 157, 125);
  font-size:1.2em;
  background: rgb(216,207,175);
background: linear-gradient(90deg, rgba(216,207,175,1) 0%, rgba(240,229,183,1) 49%, rgba(216,207,175,1) 100%);
`;
const Figure = styled.figure`
  width: 100%;
  height:60vh;
  padding:1.8% 0 0 2.2% ;
  display:flex;
  overflow: hidden;

  img {
    height:100%;
  }
`;
const InfoProduct = styled.div`
  padding: 4% 1% 3%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  h3 {
    width: 100%;
    margin-bottom: 4%;
    font-size: 1.25em;
  }
  h4 {
    text-align: center;
    font-size: 1em;
  }
  p {
    margin-left: 3%;
    font-weight: bold;
    font-size: 1.4em;
  }
`;

const Cards = ({ img, imgAlt, name, Ingredients, Preparation }) => {
  return (
    <Wrapper>
    <Container>
      <GlobalStyle />
      <Figure>
        <img src={img} alt={imgAlt} />
      </Figure>
      <InfoProduct>
        <h3>{name}</h3>
        <h3>Ingredientes:</h3>
        <ul>{Ingredients}</ul>
        <h3>Preparo:</h3>
        <ul>{Preparation}</ul>
      </InfoProduct>
    </Container>
    </Wrapper>
  );
};
export default Cards;
