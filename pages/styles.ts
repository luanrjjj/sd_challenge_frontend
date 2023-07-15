import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    html {
    height:100%;
    overflow-x:hidden;
    }

    body {
        margin:0 !important;
        padding:0 !important;
        box-sizing:border-box !important;
        min-height: 100% !important;
        font-family:'Poppins',sans-serif !important;
        background-color:rgb(20, 20, 20);
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 7px !important;
            background: transparent;
        }
/*
        &::-webkit-scrollbar-track {
            padding: 2px 0 !important;
        } */

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 1px rgba(0, 0, 0, .3) !important;
            background-color: #0000;
            border: 1px solid #000;
        }
    }
`;





export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  .books-row {
    display: flex;

  }

  .book {
    margin-left: 10px;
  }

`
