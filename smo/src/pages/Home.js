import React from "react";
import Scrollbar from "../components/Scrollbar";
import Topic from "../components/Topic";
import Head1 from "../components/Head1";
import styleScrollbar from "../components/Scrollbar.module.css";

const Home = () => {
    return (
        <div>
        
        <Head1>나의 포스트</Head1>
        <Scrollbar className={styleScrollbar.scrollbar_container}>
            <Topic />
            <Topic />
            <Topic />
        </Scrollbar>
        <Head1>친구의 포스트</Head1>
        <Scrollbar className={styleScrollbar.scrollbar_container}></Scrollbar>
       
        </div>
    );
    };

export default Home;
