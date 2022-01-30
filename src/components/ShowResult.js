import React, { useEffect } from "react";
import { LottoAnswerListUl, StyledButton } from "../components/lottostyled.js";

const ShowResult = ({
  lottoCnt,
  lottoNumber,
  answerNumber,
  sameCount,
  setSameCount,
  setAnswerNumber,
  makeRandomNumbers,
  resultVisable,
  setResultVisable,
}) => {
  useEffect(() => {
    rank();
  }, [answerNumber]);

  const rank = () => {
    for (let k = 0; k < lottoCnt; k++) {
      for (let i = 0; i < 6; i++) {
        console.log(lottoNumber[k].numbers[i]);
        console.log(answerNumber[i]);
        console.log("-----");
        if (lottoNumber[k].numbers[i] === answerNumber[i]) {
          console.log(answerNumber[i] + "가 일치");
          setSameCount((cnt) => cnt + 1);
        }
      }
    }
  };
  const winningAmount = () => {
    let amount = 0;
    if (sameCount === 6) {
      amount = 1513274790;
    } else if (sameCount === 5) {
      amount = 60229843;
      // } else if (sameCount === 5) {
      //   amount = 1371186;
    } else if (sameCount === 4) {
      amount = 50000;
    } else if (sameCount === 3) {
      amount = 5000;
    }
    return amount;
  };
  const showAnswer = (e) => {
    if (lottoCnt === 0) {
      alert("로또를 구매한 후 이용가능합니다.");
      return;
    }
    setResultVisable(true);
    setAnswerNumber(makeRandomNumbers());
  };

  return (
    <div>
      <StyledButton onClick={showAnswer} disabled={resultVisable}>
        당첨확인
      </StyledButton>
      <br />
      <div>
        {answerNumber &&
          answerNumber.map((number) => (
            <LottoAnswerListUl key={number}>{number}</LottoAnswerListUl>
          ))}
        <div>일치개수: {sameCount}개</div>
        <div>당첨금액: {winningAmount()}원</div>
      </div>
      <br />
    </div>
  );
};

export default ShowResult;
