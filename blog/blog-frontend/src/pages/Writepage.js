import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import WriteActionsButtons from '../components/write/WriteActionButtons';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionsButtons />
    </Responsive>
  );
};

export default WritePage;
