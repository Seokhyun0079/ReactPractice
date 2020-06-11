import React, { useEffect } from "react";
import WriteActionButton from "../../components/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { writePost } from "../../modules/write";

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, orginalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      orginalPostId: write.orginalPostId,
    })
  );

  const onPublish = () => {
    if (orginalPostId) {
      dispatch(
        writePost({
          title,
          body,
          tags,
          orginalPostId,
        })
      );
      return;
    }
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!orginalPostId}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
