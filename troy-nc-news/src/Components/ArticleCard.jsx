import React from "react";
import { Link } from "@reach/router";

class ArticleCard extends React.Component {
  state = {};

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
      <Link to={`/articles/${article_id}`}>
        <li key={title}>
          <h3>{title}</h3>
          <p>
            votes: {votes} || by: {author} || comments: {comment_count}
          </p>
          <p>posted: {created_at}</p>
        </li>
      </Link>
    );
  }
}

export default ArticleCard;
