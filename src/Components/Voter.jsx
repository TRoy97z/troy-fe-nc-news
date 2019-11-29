import React from "react";
import * as api from "../utils/api";

class Voter extends React.Component {
  state = { voteUpdate: 0 };

  handleVote = event => {
    let vote = +event.target.id;

    this.setState(prevState => {
      return { voteUpdate: prevState.voteUpdate + vote };
    });

    if (this.props.comment_id) {
      api.patchCommentVotes(this.props.comment_id, vote);
    } else {
      api.patchArticleVotes(this.props.article_id, vote);
    }
  };

  render() {
    return (
      <section>
        <button
          id={1}
          onClick={this.handleVote}
          disabled={this.state.voteUpdate > 0}
        >
          Vote Up
        </button>
        <button
          id={-1}
          onClick={this.handleVote}
          disabled={this.state.voteUpdate < 0}
        >
          Vote Down
        </button>
        <p> Votes({this.props.votes + this.state.voteUpdate})</p>
      </section>
    );
  }
}

export default Voter;
