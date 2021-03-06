import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  flex: 0 1 70%;
  height: 40px;
.input {
  border: solid 1px rgb(247, 247, 247);
  border-right: none;
  background: none;
  height: 100%;
  outline: none;
  display: block;
  width: 97%;
  color: rgb(247, 247, 247);
  font-size: 25px;
}

.btn {
  position: absolute;
  text-align: center;
  height: 100%;
  right: 0px;
  padding: 21px;
  top: 0px;
  background: none;
  border: 1px solid rgb(247, 247, 247);
  border-left: none;
  font-weight: 700;
  color: darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.btn:hover {
  color: aquamarine;
  border: 1px solid aquamarine;
}

@media (max-width:700px) {
    height: 20px;

  .input {
    font-size: 10px;
  }

  .btn {
    padding: 0;
    font-size: 10px;
    height: 120%;
    width: 25px;
  }
}
`;
