import React from "react";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";
import CommentForm from "../Components/CommentForm";
import styles from "../styles/CommentCard.module.css";

class CommentsList extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = newComment => {
    this.setState(prevState => {
      const newState = prevState.comments.map(comment => {
        return { ...comment };
      });

      newState.unshift(newComment);
      return { comments: newState };
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    const { article_id } = this.props;
    if (isLoading) return <h2>Loading...</h2>;
    return (
      <section className={styles.list}>
        <CommentForm article_id={article_id} addComment={this.addComment} />
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                comments={comments}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CommentsList;
