import { useState } from "react";

function LottoGame() {
  const [inputMoney, setMoney] = useState("");
  const [lottoCnt, setLottoCnt] = useState(0);
  const [lottoNumber, setLottoNumber] = useState([]);
  const [nextId, setNextId] = useState(1);

  const onChangeMoney = (e) => {
    setMoney(e.target.value);
  };

  const onClick = (e) => {
    const calcCnt = Math.floor(inputMoney / 1000);
    setLottoCnt(() => calcCnt, randomNumbers(calcCnt));
    setMoney("");

    e.target.disabled = true;
    e.target.innerHTML = "발급완료";
  };

  const randomNumbers = (cnt) => {
    for (let k = 0; k < cnt; k++) {
      let flag = true;
      let number = [];

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

      const nextLottoNumber = lottoNumber.concat({
        id: nextId,
        numbers: number,
      });

      console.log("nextId: " + nextId);
      setLottoNumber(nextLottoNumber);
      setNextId(nextId + 1);
    }
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
      <div>
        {lottoNumber.map((lottoNum) => (
          <li key={lottoNum.id}>
            {lottoNum.id}나열
            {lottoNum.numbers[0]} {lottoNum.numbers[1]} {lottoNum.numbers[2]}{" "}
            {lottoNum.numbers[3]} {lottoNum.numbers[4]} {lottoNum.numbers[5]}
          </li>
        ))}
      </div>
      <br />
      <br />
      결과 확인하기
      <br />
    </div>
  );
}

export default LottoGame;
