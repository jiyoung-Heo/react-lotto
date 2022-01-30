import React from "react";
import { StyledButton, InputStyle } from "../components/lottostyled.js";

const LottoPurchaseForm = ({
  inputMoney,
  setLottoCnt,
  setMoney,
  userNumbers,
  disabled,
  setDisabled,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const calcCnt = Math.floor(inputMoney / 1000);
    setLottoCnt(() => calcCnt, userNumbers(calcCnt));
    setDisabled(true);
    setMoney("");
  };

  const onChangeMoney = (e) => {
    setMoney(e.target.value);
  };

  return (
    <div>
      <h1>REACT LOTTO</h1>
      <form onSubmit={onSubmit}>
        <label>구입할 금액을 입력해주세요.</label>
        <div>
          <InputStyle
            placeholder="구매금액을 입력하세요"
            value={inputMoney}
            onChange={onChangeMoney}
          />
          <StyledButton disabled={disabled}>발급받기</StyledButton>
        </div>
      </form>
    </div>
  );
};

export default LottoPurchaseForm;
