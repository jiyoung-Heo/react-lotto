import "./App.css";
import LottoPurchaseForm from "./components/LottoPurchaseForm";
import MyLottoNumber from "./components/MyLottoNumber";
import ShowResult from "./components/ShowResult";
import ResetButton from "./components/ResetButton";

import { useState } from "react";

function App() {
  const [inputMoney, setMoney] = useState("");
  const [lottoCnt, setLottoCnt] = useState(0);
  const [lottoNumber, setLottoNumber] = useState([]);
  const [answerNumber, setAnswerNumber] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [visible, setVisible] = useState(false);
  const [sameCount, setSameCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [resultVisable, setResultVisable] = useState(false);

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
      setNextId((nextId) => nextId + 1);
    }
  };

  return (
    <div className="App">
      <LottoPurchaseForm
        inputMoney={inputMoney}
        setLottoCnt={setLottoCnt}
        setMoney={setMoney}
        userNumbers={userNumbers}
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <br />
      <MyLottoNumber
        lottoCnt={lottoCnt}
        lottoNumber={lottoNumber}
        visible={visible}
        setVisible={setVisible}
      />
      <br />
      <ShowResult
        lottoCnt={lottoCnt}
        lottoNumber={lottoNumber}
        answerNumber={answerNumber}
        sameCount={sameCount}
        setSameCount={setSameCount}
        setAnswerNumber={setAnswerNumber}
        makeRandomNumbers={makeRandomNumbers}
        resultVisable={resultVisable}
        setResultVisable={setResultVisable}
      />
      <ResetButton />
    </div>
  );
}

export default App;
