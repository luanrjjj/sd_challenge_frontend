import styled from "styled-components";
import colors from "../../styles/colors";

export const BookCardContainer = styled.div`
  .book-content {
    background-color: ${colors.grayThreadShade2};
    width: 330px;
    padding: 20px;
    border-radius: 12px;
    /* height: 200px; */
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;



    .buy-links {
        display: flex;
        margin-top: 10px;
      }

    .image-book {
      margin: auto;
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
