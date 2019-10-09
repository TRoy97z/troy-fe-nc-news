import React from "react";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";

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

  render() {
    const { comments } = this.state;
    return (
      <ul>
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    );
  }
}

export default CommentsList;
