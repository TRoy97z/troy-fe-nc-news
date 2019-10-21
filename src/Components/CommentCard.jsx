import React from "react";
import Voter from "./Voter";
import * as api from "../utils/api";
import styles from "../styles/CommentCard.module.css";
import Moment from "react-moment";

class CommentCard extends React.Component {
  state = { deleted: false, error: null, username: "grumpy19" };

  removeComment = () => {
    const { comment_id } = this.props.comment;
    this.setState({ deleted: true });
    api.deleteCommentByCommentId(comment_id).catch(error => {
      const { msg } = error.response.data;
      const { status } = error.response;

      this.setState({ error: { status, msg } });
    });
  };

  render() {
    const { deleted, username } = this.state;
    const { comment } = this.props;
    const { created_at, body, author, votes, comment_id } = comment;
    return (
      <li className={styles.card} key={created_at}>
        <h4>{body}</h4>
        <h5>
          Posted By: {author} | <Moment date={created_at} fromNow />
        </h5>
        <Voter votes={votes} comment_id={comment_id} />
        {username === author && (
          <button onClick={this.removeComment} disabled={deleted}>
            {deleted ? "Comment Deleted" : "Delete"}
          </button>
        )}
      </li>
    );
  }
}

export default CommentCard;
