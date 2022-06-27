import styled from 'styled-components';

export const FooterStyles = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  @media (max-width:700px) {
      flex-direction: column;
      justify-content: center;
  }
`;
