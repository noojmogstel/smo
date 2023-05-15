import React from "react";
import Scrollbar from "../components/Scrollbar";
import Topic from "../components/Topic";
import Head1 from "../components/Head1";
import styleScrollbar from "../components/Scrollbar.module.css";
import Thumbnail from "../components/Thumbnail";
import profile from "../img/logo.png";

const Home = () => {
  return (
    <div>
      <Head1>나의 포스트</Head1>
      <Scrollbar className={styleScrollbar.scrollbar_container}>
        <Thumbnail imageUrl={profile} title="무야호호"></Thumbnail>
        <Thumbnail imageUrl={profile} title="무야호호"></Thumbnail>
        <Thumbnail imageUrl={profile} title="무야호호"></Thumbnail>
        <Thumbnail imageUrl={profile} title="무야호호"></Thumbnail>
      </Scrollbar>
      <Head1>친구의 포스트</Head1>
      <Scrollbar className={styleScrollbar.scrollbar_container}></Scrollbar>
    </div>
  );
};

export default Home;
