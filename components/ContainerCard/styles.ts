import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div `
  background-color: ${colors.grayThread};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border: 1px solid ${colors.black};


  h1 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 40px;
  }

`
