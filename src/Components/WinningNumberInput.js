import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const InputHeader = styled.h3`
  text-align: center;
`;

const InputBox = styled.input`
  width: 40px;
  height: 36px;
  &:not(:last-child) {
    margin-right: 7px;
  }
  text-align: center;
`;

// TODO: PurchaseInput의 Button이랑 중복되는 요소가 많음
const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 10px 0;
  background-color: #00bcd4;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #018c9e;
  }
`;

export default class WinningNumberInput extends Component {
  render() {
    return (
      <form>
        <Header>지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</Header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <InputHeader>당첨 번호</InputHeader>
            <div
              style={{
                display: "flex",
              }}
            >
              {Array.from({ length: 6 }, (_, index) => (
                <InputBox
                  key={index}
                  type="number"
                  min="1"
                  max="45"
                  required="required"
                ></InputBox>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <InputHeader>보너스 번호</InputHeader>
            <InputBox
              type="number"
              min="1"
              max="45"
              required="required"
            ></InputBox>
          </div>
        </div>
        <Button type="submit">확인</Button>
      </form>
    );
  }
}
