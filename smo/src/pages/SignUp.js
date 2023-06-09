import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import styleInput from "../components/Input.module.css";
import styleButton from "../components/Button.module.css";
<<<<<<< HEAD
const SignUp = () => {
=======
import { useDispatch } from "react-redux";  
import {signup}  from "../modules/signup";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
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
<<<<<<< HEAD
=======

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  //Post 요청
  const handleSubmit = async () => {
   const res = await dispatch(signup(email, name, email, password));
    console.log(res)
    console.log(res.message)
    
    alert("Success");
    navigate("/login");
  };
  
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
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
<<<<<<< HEAD
      <Input className={styleInput.input}placeholder="이름을 입력하세요." valid="true">
=======
      <Input className={styleInput.input} onChange={nameChangeHandler} placeholder="이름을 입력하세요." valid="true">
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
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
<<<<<<< HEAD
      <Button className={styleButton.button}>회원가입</Button>
=======
      <Button onClick={handleSubmit} className={styleButton.button}>회원가입</Button>
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
    </div>
  );
};

export default SignUp;
