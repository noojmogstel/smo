import React from "react";
import Head1 from "../components/Head1";
import PostItList from "./PostItList";
const Topic = () => {
  const posts = [
    {
      id: 1,
      title: "첫 번째 포스트잇",
      content: "안녕하세요. 첫 번째 포스트잇입니다.",
    },
    {
      id: 2,
      title: "두 번째 포스트잇",
      content: "안녕하세요. 두 번째 포스트잇입니다.",
    },
    {
      id: 3,
      title: "세 번째 포스트잇",
      content: "안녕하세요. 세 번째 포스트잇입니다.",
    },
    {
      id: 4,
      title: "네 번째 포스트잇",
      content: "안녕하세요. 네 번째 포스트잇입니다.",
    },
    {
      id: 5,
      title: "다섯 번째 포스트잇",
      content: "안녕하세요. 다섯 번째 포스트잇입니다.",
    },
    {
      id: 6,
      title: "여섯 번째 포스트잇",
      content: "안녕하세요. 여섯 번째 포스트잇입니다.",
    },
    {
      id: 7,
      title: "일곱 번째 포스트잇",
      content: "안녕하세요. 일곱 번째 포스트잇입니다.",
    },
    {
      id: 8,
      title: "여덟 번째 포스트잇",
      content: "안녕하세요. 여덟 번째 포스트잇입니다.",
    },
    {
      id: 9,
      title: "아홉 번째 포스트잇",
      content: "안녕하세요. 아홉 번째 포스트잇입니다.",
    },
    {
      id: 10,
      title: "열 번째 포스트잇",
      content: "안녕하세요. 열 번째 포스트잇입니다.",
    },
  ];

  return (
    <div>
      <Head1>제목</Head1>
      <PostItList posts={posts}></PostItList>
    </div>
  );
};

export default Topic;
