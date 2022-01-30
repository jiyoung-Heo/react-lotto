import { StyledButton, LottoDetailListUl } from "../components/lottostyled.js";

const MyLottoNumber = ({ lottoCnt, lottoNumber, visible, setVisible }) => {
  return (
    <div>
      발급 개수: {lottoCnt}개
      <br />
      <StyledButton
        onClick={() => {
          if (lottoCnt === 0) {
            alert("로또를 구매한 후 이용가능합니다.");
            return;
          }
          setVisible(!visible);
        }}
      >
        {visible ? "구매한 로또 숨기기" : "구매한 로또 보이기"}
      </StyledButton>
      <div>
        {visible &&
          lottoNumber.map((lottoNum) => (
            <div key={lottoNum.id}>
              <LottoDetailListUl>{lottoNum.numbers[0]}</LottoDetailListUl>
              <LottoDetailListUl>{lottoNum.numbers[1]}</LottoDetailListUl>
              <LottoDetailListUl>{lottoNum.numbers[2]}</LottoDetailListUl>
              <LottoDetailListUl>{lottoNum.numbers[3]}</LottoDetailListUl>
              <LottoDetailListUl>{lottoNum.numbers[4]}</LottoDetailListUl>
              <LottoDetailListUl>{lottoNum.numbers[5]}</LottoDetailListUl>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyLottoNumber;
