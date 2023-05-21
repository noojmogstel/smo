import React from "react";
import Head1 from "../components/Head1";
import Input from "../components/Input";
import styleInput from "../components/Input.module.css";
import Scrollbar from "../components/Scrollbar";
import styleScrollbar from "../components/Scrollbar.module.css";
const Find = () => {
    return <div>
        <Head1>친구 찾기</Head1>
        <div style={{marginBottom:"30px"}}></div>
        <Input className={styleInput.input}>친구 이름 입력</Input>
        <Head1>검색 결과</Head1>
        <Scrollbar className={styleScrollbar.scrollbar_bigger}></Scrollbar>
    </div>;
    }

export default Find;