import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import styleInput from "../components/Input.module.css";
import styleButton from "../components/Button.module.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(true);

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const passwordRChangeHandler = (event) => {
    setPasswordR(event.target.value);
  };
  useEffect(() => {
    if (password === passwordR) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }, [passwordR]);
  function handleEmailChange(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const regex = /\S+@\S+\.\S+/;
    setIsValidEmail(regex.test(inputEmail));
  }

  return (
    <div>
      <Header />
      <Box>회원가입</Box>
      <Input className={styleInput.input}placeholder="이름을 입력하세요." valid="true">
        이름
      </Input>
      <Input
        className={isValidEmail ? styleInput.input : styleInput.input_invalid}
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder={
          isValidEmail
            ? "이메일을 입력하세요."
            : "이메일 형식이 올바르지 않습니다."
        }
        valid={isValidEmail}
      >
        이메일
      </Input>
      <Input
      className={styleInput.input}
        placeholder="비밀번호를 입력하세요."
        valid="true"
        value={password}
        onChange={passwordChangeHandler}
        type="password"
      >
        비밀번호
      </Input>
      <Input
      className={passwordCheck ? styleInput.input : styleInput.input_invalid}
        placeholder="비밀번호를 다시 입력하세요."
        valid={passwordCheck}
        value={passwordR}
        onChange={passwordRChangeHandler}
        type="password"
      >
        비밀번호 확인
      </Input>

      <Button className={styleButton.button}>인증번호 받기</Button>

      <Input className={styleInput.input} placeholder="인증번호를 입력하세요." valid="true">
        인증번호
      </Input>
      <Button className={styleButton.button}>회원가입</Button>
    </div>
  );
};

export default SignUp;