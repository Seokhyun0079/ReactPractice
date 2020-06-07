import React from "react";
import HeaderContainer from "../container/common/HeaderContainer";
import PostListContainer from "../container/posts/PostListContainer";
import PaginationContainer from "../components/posts/PaginationContainer";
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
