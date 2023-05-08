import React from "react";
import Input from "../components/Input";
import styleInput from "../components/Input.module.css";
import Button from "../components/Button";
import styleButton from "../components/Button.module.css";
const Posting = () => {

    return (
        <div style={{marginTop:"30px"}}>
        <Input className={styleInput.input}placeholder="제목을 입력하세요." valid="true">
        글제목
        </Input>
        <Button className={styleInput.input}>사진첨부</Button>

        <Button className={styleButton.button}>글쓰기</Button>
        </div>
    );
    }

export default Posting;
