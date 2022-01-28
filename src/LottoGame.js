import { useState, useEffect } from "react";

function LottoGame() {
  const [inputMoney, setMoney] = useState("");
  const [lottoCnt, setLottoCnt] = useState(0);
  const [lottoNumber, setLottoNumber] = useState([]);
  const [answerNumber, setAnswerNumber] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [visible, setVisible] = useState(false);
  const [sameCount, setSameCount] = useState(0);

  useEffect(() => {
    rank();
  }, [answerNumber]);

  const onClick = (e) => {
    const calcCnt = Math.floor(inputMoney / 1000);
    setLottoCnt(() => calcCnt, userNumbers(calcCnt));
    setMoney("");

    e.target.disabled = true;
    e.target.innerHTML = "발급완료";
  };

  const makeRandomNumbers = () => {
    let number = [];
    let flag = true;
    while (flag) {
      number = [];
      for (let i = 0; i < 6; i++) {
        number.push(Math.floor(Math.random() * 45 + 1));
        console.log(number[i]);
      }
      const set = new Set(number);
      if (number.length === set.size) {
        flag = false;
      }
      console.log(flag);
    }
    return number;
  };

  const userNumbers = (cnt) => {
    for (let k = 0; k < cnt; k++) {
      let number = makeRandomNumbers();
      const nextLottoNumber = lottoNumber.concat({
        id: nextId,
        numbers: number,
      });

      console.log("nextId: " + nextId);
      setLottoNumber(nextLottoNumber);
      setNextId(nextId + 1);
    }
  };

  const onChangeMoney = (e) => {
    setMoney(e.target.value);
  };

  const resultClick = () => {
    setAnswerNumber(makeRandomNumbers());
  };

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

  return (
    <div>
      로또
      <br />
      <br />
      <input
        type="number"
        placeholder="구매금액을 입력하세요"
        value={inputMoney}
        onChange={onChangeMoney}
      />
      <button id="issued" onClick={onClick}>
        발급받기
      </button>
      <br />
      발급 개수: {lottoCnt}개
      <br />
      구매한 로또 내역
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <div>
        {visible &&
          lottoNumber.map((lottoNum) => (
            <li key={lottoNum.id}>
              {lottoNum.id}나열
              {lottoNum.numbers[0]} {lottoNum.numbers[1]} {lottoNum.numbers[2]}{" "}
              {lottoNum.numbers[3]} {lottoNum.numbers[4]} {lottoNum.numbers[5]}
            </li>
          ))}
      </div>
      <br />
      <button onClick={resultClick}>당첨번호 확인하기</button>
      <ul>
        {answerNumber.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <div>일치개수: {sameCount}개</div>
      <div>당첨금액: {winningAmount()}원</div>
      <br />
      로또 당첨 금액 <br />
      1등: 1,513,274,790원 당첨번호 6개 일치
      <br />
      2등: 60,229,843원 당첨번호 5개 일치 + 보너스숫자 일치 <br />
      3등: 1,371,186원 당첨번호 5개 일치 <br />
      4등: 50,000원 당첨번호 4개 일치 <br />
      5등: 5,000원 당첨번호 3개 일치 <br />
      꽝: 당첨번호 3개 미만 일치
      <br />
    </div>
  );
}

export default LottoGame;
