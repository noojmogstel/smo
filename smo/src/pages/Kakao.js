import React from "react";

const Kakao = () => {
  const REST_API_KEY = "62905cdd843de0ba5b4606b6cd28b12b";

  const redirectURI = "http://localhost:3000/KakaoLogin";
  const URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${redirectURI}&response_type=code`;

  const handle = async () => {
    window.location.href = URL;
  };

  return (
    <div>
      <button onClick={handle}>카카오 로그인</button>
    </div>
  );
};

export default Kakao;
