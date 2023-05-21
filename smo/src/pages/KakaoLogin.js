import React from "react";
import { useLocation } from "react-router-dom";

const KakaoLogin = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];

  return <div>{KAKAO_CODE}</div>;
};

export default KakaoLogin;
