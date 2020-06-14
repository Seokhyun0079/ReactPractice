import React from "react";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../container/common/EditorContainer";
import TagBoxContainer from "../components/write/TagBoxContainer";
import WriteActionButtonsContainer from "../container/write/WriteActionButtonsContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - REACTORS</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
