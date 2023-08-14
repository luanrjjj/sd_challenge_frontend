import styled from 'styled-components';
import colors from '../../styles/colors';

interface CardInformationProps {
  bgColor?: string;
  boxShadow?: string;
}

export const Container = styled.div<CardInformationProps>`
  width: 240px;
  min-height: 80px;
  border-radius: 8px;
  background-color: ${props => props.bgColor ? props.bgColor : colors.headerCourse};
  box-shadow: ${props => props.boxShadow === "dark" ? '0px 0px 5px 0px rgba( 0, 0, 0, 0.75)': '0px 4px 24px rgba(0, 0, 0, 0.15)'};
  border: 1px solid ${colors.separatorColorWhiteBackground};
  border-radius: 8px;
  z-index: -1;

  .card-content {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
  }

  .card-value {
    display: flex;
    flex-direction: column;
  }

  .card-icon {
      font-size: 16px;
  }

  h2 {
    color: ${colors.grayShade4} !important;
    font-weight: 500;
    margin-bottom: 0;
    font-size: 14px !important;
  }

  h1 {
    color: ${colors.black} !important;
    margin-bottom: 0;
    font-size: 24px !important;
  }

  span {
    color: ${colors.letterGrayColor} !important;
    font-size: 12px !important;
  }

`;
