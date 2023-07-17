import styled from "styled-components";
import colors from "../../styles/colors";

export const BookContainer = styled.div`

  .book-content {
    display: grid;
    grid-template-columns: 220px auto;
    background-color: ${colors.grayThreadShade2};
    width: 1200px;
    padding: 20px;
    border-radius: 12px;
    margin-top: 20px;

    @media (max-width: 1200px) {
    max-width: 950px;
    grid-template-columns: auto;
    }

  @media (max-width: 950px) {
    max-width: 600px;
  }

  @media (max-width: 600px) {
    max-width: 320px;
  }

    .book-buy-links {
      display: flex;
      margin-top: 20px;
    }

    .book-image {
      margin: auto 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .book-information {
      display: flex;
      flex-direction: column;
    }

    .book-description {
      height: 100px;
    }

    img {
      border-radius: 8px;
    }

    h2 {
      color: ${colors.white};
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    span {
      color: ${colors.letterGrayColor2};
    }

    p {
      margin: 0;
      color: ${colors.letterGrayColor};
    }
  }
`
