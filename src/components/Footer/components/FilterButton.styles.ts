import styled, { css } from 'styled-components';

type StyledProps = {
  isActive: boolean,
}

export const StyledFilterButton = styled.button<StyledProps>`
  color: ${(props) => (props.isActive ? 'aquamarine' : 'darkgray')};
  border: ${(props) => (props.isActive ? '1px solid aquamarine' : '1px solid darkgray')};
  border-radius: 2px;
  background: none;

  ${(props) => (!props.isActive) &&
    (css`:hover{
    border: 1px solid rgb(197, 197, 197);
    color: rgb(197, 197, 197);
  }`)}
`;
