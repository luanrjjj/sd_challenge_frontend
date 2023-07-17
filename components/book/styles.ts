import styled from "styled-components";
import colors from "../../styles/colors";

export const BookContainer = styled.div`

  .book-content {
    display: grid;
    grid-template-columns: 170px auto;
    background-color: ${colors.grayThreadShade2};
    width: 1200px;
    padding: 20px;
    border-radius: 12px;
    margin-top: 20px;

    .book-buy-links {
      display: flex;
      margin-top: 10px;
    }

    .book-image {
      margin: auto 0;
      max-width: 150px;
    }

    .book-information {
      display: flex;
      flex-direction: column;
    }



    .book-description {
      height: 50px;
    }

    img {
      border-radius: 8px;
    }

    h2 {
      color: ${colors.white};
      font-size: 1.2rem;
    }

    span {
      color: ${colors.letterGrayColor2};
    }

    p {
      margin-bottom: 0;
      color: ${colors.letterGrayColor};
    }
  }



`
