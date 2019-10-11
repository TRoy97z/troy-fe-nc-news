import React from "react";
import * as api from "../utils/api";

class PostComment extends React.Component {
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
    const body = this.state;
    const { article_id, fetchCommentsByArticleId } = this.props;
    api
      .postCommentByArticleId(article_id, body)
      .then(() => {
        return fetchCommentsByArticleId();
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
export default PostComment;
