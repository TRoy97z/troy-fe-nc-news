import React from "react";
import { Link } from "@reach/router";
// import * as api from "../utils/api";
import Voter from "./Voter";

class ArticleCard extends React.Component {
  state = { votes: this.props.votes };
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
        <>
          <Voter votes={votes} article_id={article_id} />
          <p>Comments: {comment_count}</p>
        </>
        <h5>
          Posted By: {author} || {created_at}
        </h5>
      </li>
    );
  }
}

export default ArticleCard;
