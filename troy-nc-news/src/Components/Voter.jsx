import React from "react";

class Voter extends React.Component {
  state = { voteInc: false, voteDec: false };

  incVote = () => {
    const { articleVoteHandler } = this.props;
    const { votedUp } = this.state;
    if (!votedUp) {
      articleVoteHandler(1);
      this.setState({ votedUp: true });
    } else {
      articleVoteHandler(-1);
      this.setState({ votedUp: false });
    }
  };

  decVote = () => {
    const { articleVoteHandler } = this.props;
    const { votedDown } = this.state;
    if (!votedDown) {
      articleVoteHandler(-1);
      this.setState({ votedDown: true });
    } else {
      articleVoteHandler(1);
      this.setState({ votedDown: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.incVote}>Vote Up</button>
        <button onClick={this.decVote}>Vote Down</button>
      </React.Fragment>
    );
  }
}

export default Voter;
