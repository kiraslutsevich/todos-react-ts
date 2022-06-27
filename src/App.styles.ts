import styled from 'styled-components';

export const AppStyles = styled.div`
  text-align: center;
  margin: 20px auto;
  width: 70%;
  min-width: 250px;
  background-color: rgb(58, 58, 58);
  border-radius: 2px;
  box-shadow: 4px 4px 16px 1px rgba(34, 60, 80, 0.28);
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  @media (max-width:360px) {
    width: 250px;
    margin: 10px auto;
  }
  .container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
`;