import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostIt from "./PostIt";
import styled from "styled-components";

const PostItList = ({ posts }) => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9, // 한 슬라이드에 9개의 포스트잇이 보이게 함
    slidesToScroll: 1, // 9개씩 스크롤 되도록 함
    centerMode: false,
  });

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const getRandomPosition = () => {
    return {
      top: Math.floor(Math.random() * 70) + "%",
      left: Math.floor(Math.random() * 70) + "%",
    };
  };

  const getRandomAngle = () => {
    return Math.floor(Math.random() * 20) - 10;
  };

  return (
    <div style={{ marginBottom: "20%" }}>
      {posts.map((post) => (
        <PostIt
          key={post.id}
          title={post.title}
          content={post.content}
          color={getRandomColor()}
          position={getRandomPosition()}
          angle={getRandomAngle()}
        />
      ))}
    </div>
  );
};

export default PostItList;
