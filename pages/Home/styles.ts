import styled, { createGlobalStyle } from 'styled-components';
import {shade} from 'polished';
import colors from '../../styles/colors';



const Container = styled.div `
  max-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 150px;

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

  .score-cards-section {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    max-width: 900px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin: auto;
  }

  .icons-column {
    display: flex;

    .component-btn{
      margin-right: 10px;
    }
  }
`


export default Container;
