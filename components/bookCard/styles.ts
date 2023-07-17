import styled from "styled-components";
import colors from "../../styles/colors";

export const BookCardContainer = styled.div`
  .book-card-content {
    background-color: ${colors.grayThreadShade2};
    width: 280px;
    padding: 20px;
    border-radius: 12px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    height: 570px;

    .book-card-buy-links {
      display: flex;
      margin-top: 10px;
    }

    .book-card-description {
      height: 150px;
    }

    .book-card-details {
      padding-top: 10px;
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
      font-size: 14px;
    }

    p {
      margin-bottom: 0;
      margin-top: 0;
      color: ${colors.letterGrayColor};
      font-size: 14px;
    }
  }
`
