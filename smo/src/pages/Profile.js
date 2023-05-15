import React from "react";
import Head1 from "../components/Head1";
import User from "../components/User";
import Thumbnail from "../components/Thumbnail";
import profile from "../img/logo.png";
import styleUser from "../components/User.module.css";
const Profile = () => {
  return (
    <div>
      <Head1>내 정보 </Head1>
      <User className={styleUser.frame}>
        <div>-자신의 닉네임- 님.</div>
        <div>id@email.com</div>
      </User>
      <Head1>친구 </Head1>
      <User className={styleUser.frame}>
        <div>친구 : 3명</div>
        <div>게시물 : 3개</div>
        <div>받은 포스트잇 :34개</div>
      </User>
      <Head1>최근 게시한 글 </Head1>
      <User className={styleUser.frame_currentTopic}>
        <Thumbnail imageUrl={profile} title="무야호호"></Thumbnail>
        <Thumbnail imageUrl={profile} title="무야호호"></Thumbnail>
      </User>
    </div>
  );
};

export default Profile;
