import React from "react";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";
import PostComment from "../Components/PostComment";

class CommentsList extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments });
    });
  }

  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments });
    });
  };

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <React.Fragment>
        <PostComment
          article_id={article_id}
          fetchCommentsByArticleId={this.fetchCommentsByArticleId}
        />
        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default CommentsList;
