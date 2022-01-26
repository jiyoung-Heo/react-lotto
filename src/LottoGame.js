import { useState } from "react";

function LottoGame() {
  const [inputMoney, setMoney] = useState("");
  const [lottoCnt, setLottoCnt] = useState(0);

  const onChangeMoney = (e) => {
    setMoney(e.target.value);
  };

  const onClick = (e) => {
    const calcCnt = Math.floor(inputMoney / 1000);
    setLottoCnt(() => calcCnt);
    setMoney("");

    e.target.disabled = true;
    e.target.innerHTML = "발급완료";
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
      <div></div>
      <br />
      <br />
      결과 확인하기
      <br />
    </div>
  );
}

export default LottoGame;
