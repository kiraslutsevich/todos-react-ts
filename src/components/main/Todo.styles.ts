import styled from 'styled-components';

export const TodoStyle = styled.div`
  text-align: left;
  height: fit-content;
  position: relative;

  padding: 2px 6px;
  border-radius: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  background: none;
  border: solid 1px rgb(247, 247, 247);

  &:hover {
    background-color: rgb(75, 75, 75);
  }

  @media (max-width:420px) {
  position: relative;
  }

  .edit-text {
  background: none;
  outline: none;
  border: none;
  color: darkgrey;
  font-family: 'Poppins';
  }

  .text {
  padding: 0px 40px;
  align-self: center;
  }

 .delete-btn{
  background: none;
  color: aquamarine;
  transform: rotate(45deg);
  border: none;
  font-size: 20px;

 .delete-btn:hover{
  color: tomato;
  }
 }

  .checkbox{
  color: aquamarine;
  width: 20px;
  height: 20px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  border-style: none;
  border-color: none;
  font-size: 20px;
  border: 1px solid aquamarine;
}
`;
