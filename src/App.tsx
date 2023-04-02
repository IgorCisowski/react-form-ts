import React from "react";
import { createGlobalStyle } from "styled-components";
import { Form } from "./components/Form";

const GlobalStyle = createGlobalStyle`
  * {
    font-family:arial;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'Poppins', sans-serif;

  }
  `;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Form />
    </>
  );
}

export default App;
