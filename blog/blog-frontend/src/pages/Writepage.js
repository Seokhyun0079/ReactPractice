import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../container/common/EditorContainer';
import TagBoxContainer from '../components/write/TagBoxContainer';
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
