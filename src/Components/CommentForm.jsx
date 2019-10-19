import React from "react";
import * as api from "../utils/api";

class CommentForm extends React.Component {
  state = {
    body: "",
    username: "grumpy19"
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, addComment } = this.props;
    const newComment = {
      username: this.state.username,
      body: this.state.body
    };
    api
      .postCommentByArticleId(article_id, newComment)
      .then(newComment => {
        addComment(newComment);
      })
      .then(() => {
        this.setState({ body: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body">
          <input
            type="text"
            placeholder="Any thoughts?"
            onChange={this.handleChange}
            value={this.state.body}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
export default CommentForm;
