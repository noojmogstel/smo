<<<<<<< HEAD
import React from "react";
import Topic from "../components/Topic";
const Test = () => {
  return <Topic></Topic>;
=======
import React, {useEffect, useState} from "react";
import axios from "axios";

const Test = () => {
  
  const signup = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", userData);
    // 요청이 성공한 경우 응답 데이터를 처리
    console.log(response.data);
    // 추가적인 작업 수행
  } catch (error) {
    // 요청이 실패한 경우 에러 처리
    console.error(error);
    // 추가적인 작업 수행
  }
};

const userData = {
  id: "john123",
  name: "john Doe",
  email: "johndoe@example.com",
  password: "12341234",
};
signup(userData);
  return (<div>
    <div>asdf</div>
   
  </div>)
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
};

export default Test;
