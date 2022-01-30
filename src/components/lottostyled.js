import styled from "styled-components";

export const LottoDetailListUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  padding: 0.6rem;
  max-height: 200px;
  overflow-y: auto;
  border: 0.5px solid #e9e2e2;
  border-radius: 5px;
`;
export const LottoAnswerListUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  padding: 0.6rem;
  max-height: 200px;
  overflow-y: auto;
  width: 15px;
  float: left;
  margin-right: 5px;
  border: 0.5px solid #e9e2e2;
  border-radius: 5px;
`;
export const StyledButton = styled.button`
  height: 25px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: #92a8d1;
  color: white;
  margin-top: 10px;
  :disabled {
    background-color: #edf1f7;
  }
`;
export const InputStyle = styled.input`
  height: 18px;
  width: 300px;
  margin-right: 10px;
  margin-top: 10px;
`;
