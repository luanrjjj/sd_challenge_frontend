import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    min-height: 100% !important;
    font-family: 'Poppins', sans-serif !important;
    background-color: rgb(20, 20, 20);
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 7px !important;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 1px rgba(0, 0, 0, .3) !important;
      background-color: ${colors.grayThread};
      border: 1px solid #000;
    }
  }
`;
