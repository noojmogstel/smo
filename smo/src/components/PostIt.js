import React from "react";
import styled from "styled-components";

const PostItWrapper = styled.div`
  background-color: ${({ color }) => color};

  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  transform: rotate(${({ angle }) => angle}deg);
  opacity: 0.9;
  width: 200px;
  height: 200px;
  padding: 10px;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: move;
  margin-top: 20%;
  filter: saturate(0.7);
  margin: 20px;
`;

const PostIt = ({ title, content, color, position, angle }) => {
  return (
    <PostItWrapper color={color} position={position} angle={angle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </PostItWrapper>
  );
};

export default PostIt;
