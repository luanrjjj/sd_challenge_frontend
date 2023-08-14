import { shade } from 'polished';
import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

type ButtonProps = {
  isLoading: boolean;
}
export const Container = styled.button <ButtonProps>`
  background: ${colors.purple};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 8px;
  color: ${colors.white};
  font-weight: 800;
  transition: background-color 0.2s;
  cursor: pointer;

  .spin-loading {
    margin-top: 10px;
  }

  &:hover {
    background: ${shade(0.2, `${colors.purple}`)};
  }

  ${props => props.isLoading && css`
  background: ${`${colors.purpleTint3}`};

  &:hover {
    background: ${`${colors.purpleTint3}`};
  }
`}
`;
