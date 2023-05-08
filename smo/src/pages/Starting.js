import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import smoPic from "../img/smoPic.png";
import {useNavigate} from "react-router-dom";

const Df = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Header />
      <img style={{width: "60%",
  position: "relative",
  marginTop:"30%",
  left: "50%",
  transform: "translate(-50%, -50%)"}} src={smoPic} alt="smoPic" />
      <Button onClick={() => navigate("/login")} >지금 SOUNDMEOUT 시작하기</Button>
    </div>
  );
};

export default Df;