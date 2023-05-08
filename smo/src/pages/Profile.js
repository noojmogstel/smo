import React from "react";
import Head1 from "../components/Head1";
import User from "../components/User";
const Profile = () => {
    return <div>
        <Head1>내 정보 </Head1>
        <User><div>-자신의 닉네임- 님.</div>
        <div>id@email.com</div></User>
        <Head1>친구 </Head1>
        <User><div>친구 : 3명</div>
        <div>게시물 : 3개</div> 
        <div>받은 포스트잇 :34개</div></User>
        <Head1>최근 게시한 글 </Head1>
        <User>
        <div>내용</div>
        <div>내용</div>
        <div>내용</div>
        <div>내용</div>
        <div>내용</div>
        <div>내용</div>
        <div>내용</div>
        

        </User>

    </div>;
    }

export default Profile;