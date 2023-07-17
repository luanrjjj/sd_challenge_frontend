import styled, { createGlobalStyle } from 'styled-components';
import {shade} from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div `
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 1200px;

  .books-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  .books-card-container {
    display: flex;
    flex-direction: column;
  }

  .title-page {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .filters-section {
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
      justify-content: center;
    }

    .clear-filter {
      button {
        border-radius: 8px;
        border: none;
        padding: 10px;
        background-color: ${colors.purple};
        color: white;
        margin-left: 10px;

        &:hover {
          cursor: pointer;
          background-color: ${shade(0.2, colors.purple)};
        }
      }
    }
  }

  .separator{
    width: 100%;
    height: 1px;
    background-color: ${colors.separatorColor};
    margin: 20px 0;

  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 20px;
  }

  h2 {
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0;

  }

  .row-books {
    grid-template-columns: repeat(3, auto);
    display: grid;
    grid-gap: 20px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 950px) {
      grid-template-columns: auto;
    }
  }
`
