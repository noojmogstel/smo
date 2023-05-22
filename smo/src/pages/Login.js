<<<<<<< HEAD
import React from "react";
=======
import React,{useState} from "react";
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
import Box from "../components/Box";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Kakao from "./Kakao";
import { useNavigate } from "react-router-dom";
import styleButton from "../components/Button.module.css";
import styleInput from "../components/Input.module.css";
import GoogleLogins from "./GoogleLogins";
import NaverLogin from "./NaverLogin";
<<<<<<< HEAD
const Login = () => {
  const navigate = useNavigate();
=======
import { useDispatch } from "react-redux";  
import {login}  from "../modules/login";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id,setId] = useState("");
  const [password,setPassword] = useState("");

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const res = await dispatch(login(id,password));
    console.log(res)
    
    if(!res){
      alert("Fail");
    }else{
     alert("Success");
      navigate("/main");
    }
    
  };
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261

  return (
    <div>
      <Header />
      <Box>이메일 ID로 로그인</Box>
      <Input
        className={styleInput.input}
        placeholder="이메일 ID를 입력하세요."
        valid="true"
<<<<<<< HEAD
=======
        onChange={idChangeHandler}
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
      >
        ID
      </Input>
      <Input
        className={styleInput.input}
        placeholder="비밀번호를 입력하세요."
        valid="true"
        type="password"
<<<<<<< HEAD
      >
        PASSWORD
      </Input>
      <Button className={styleButton.button}>로그인 하기!</Button>
=======
        onChange={passwordChangeHandler}
      >
        PASSWORD
      </Input>
      <Button className={styleButton.button} onClick={handleSubmit}>로그인 하기!</Button>
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
      <Box>SNS 계정으로 로그인</Box>
      <Kakao />
      <GoogleLogins />
      <NaverLogin />
      <Box>아직 회원이 아니신가요?</Box>
      <Button
        className={styleButton.button}
        onClick={() => navigate("/signup")}
      >
        회원가입
      </Button>
    </div>
  );
};

export default Login;
