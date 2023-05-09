import React from "react";
import styled from "styled-components";

const PostItWrapper = styled.div`
  background-color: ${({ color }) => color};

  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  transform: rotate(${({ angle }) => angle}deg);
  opacity: 0.9;
  width: 40%;
  height: 20%;
  padding: 20px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: move;
  margin-top: 20%;
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
