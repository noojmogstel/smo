import React from "react";
import Box from "../components/Box";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Kakao from "./Kakao";
import {useNavigate } from "react-router-dom";
import styleButton from "../components/Button.module.css";
import styleInput from "../components/Input.module.css";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Box>이메일 ID로 로그인</Box>
      <Input  className={styleInput.input}placeholder="이메일 ID를 입력하세요." valid="true">
        ID
      </Input>
      <Input className={styleInput.input}placeholder="비밀번호를 입력하세요." valid="true" type="password">
        PASSWORD
      </Input>
      <Button className={styleButton.button}>로그인 하기!</Button>
      <Box>SNS 계정으로 로그인</Box>
      <Kakao />
      <Box>아직 회원이 아니신가요?</Box>
      <Button className={styleButton.button} onClick={() => navigate("/signup")}>회원가입</Button>
    </div>
  );
};

export default Login;
