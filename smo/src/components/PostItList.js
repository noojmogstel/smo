import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostIt from "./PostIt";

const PostItList = ({ posts }) => {
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
