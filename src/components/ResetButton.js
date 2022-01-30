import { StyledButton } from "../components/lottostyled.js";

const ResetButton = () => {
  const resetLotto = () => {
    window.location.reload();
  };

  return (
    <div>
      <StyledButton onClick={resetLotto}>재시작</StyledButton>
      <br />
      <br />
      ****
      <br />
      로또 당첨 금액 <br />
      1등: 1,513,274,790원 당첨번호 6개 일치
      <br />
      2등: 60,229,843원 당첨번호 5개 일치 + 보너스숫자 일치 <br />
      3등: 1,371,186원 당첨번호 5개 일치 <br />
      4등: 50,000원 당첨번호 4개 일치 <br />
      5등: 5,000원 당첨번호 3개 일치 <br />
      꽝: 당첨번호 3개 미만 일치
    </div>
  );
};

export default ResetButton;
