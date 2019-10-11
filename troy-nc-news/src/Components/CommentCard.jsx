import React from "react";
import Voter from "./Voter";

class CommentCard extends React.Component {
  state = {};

  render() {
    const { comment } = this.props;
    const { created_at, body, author, votes } = comment;
    return (
      <li key={created_at}>
        <h4>{body}</h4>
        <h5>
          Posted By: {author} || {created_at} || Votes: {votes}
        </h5>
        <Voter />
      </li>
    );
  }
}

export default CommentCard;
