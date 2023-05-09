import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostIt from "./PostIt";

const PostItList = ({ posts }) => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // 한 슬라이드에 9개의 포스트잇이 보이게 함
    slidesToScroll: 1, // 9개씩 스크롤 되도록 함
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 한 슬라이드에 6개의 포스트잇이 보이게 함
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 한 슬라이드에 3개의 포스트잇이 보이게 함
          slidesToScroll: 1,
        },
      },
    ],
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
    <Slider {...sliderSettings}>
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
    </Slider>
  );
};

export default PostItList;
