import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import PostActionButtons from "../../components/post/PostActionButtons";
import { setOriginalPost } from "../../modules/write";

const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading["post/READ_POST"],
      user: user.user,
    })
  );
  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push("/write");
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
    />
  );
};

export default withRouter(PostViewerContainer);
