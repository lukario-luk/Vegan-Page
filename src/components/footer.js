import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
const BigBox = styled.div`
  width: 100%;
  display: flex;
  list-style: none;
  font-size: 30px;
  background-color: aquamarine;
`;

function Footer() {
  return (
    <BigBox>
      <Header />
    </BigBox>
  );
}

export default Footer;
