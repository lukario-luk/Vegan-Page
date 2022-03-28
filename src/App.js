import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
const Fundo = styled.div`
width:100%;
`

class App extends Component {
  render() {
    return (
      <Fundo>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </Fundo>
    );
  }
}

export default App;
