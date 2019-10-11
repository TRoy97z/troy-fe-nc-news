import React from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Voter from "./Voter";

class ArticleCard extends React.Component {
  state = { voteChange: false, article: {}, isLoading: true };
  render() {
    const { article } = this.props;
    const {
      article_id,
      comment_count,
      title,
      votes,
      author,
      created_at
    } = article;

    return (
      <li key={title}>
        {" "}
        <Link to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <h4>
          <Voter votes={votes} articleVoteHandler={this.articleVoteHandler} />{" "}
          votes: {votes} || comments: {comment_count}
        </h4>
        <h5>
          Posted By: {author} || {created_at}
        </h5>
      </li>
    );
  }

  articleVoteHandler = vote => {
    const { article_id } = this.props.article;
    api.patchArticleVotes(vote, article_id).then(({ article }) => {
      this.setState({ article, isLoading: false, voteChange: false });
    });
  };
}

export default ArticleCard;
