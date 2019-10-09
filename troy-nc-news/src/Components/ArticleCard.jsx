import React from "react";
import { Link } from "@reach/router";

class ArticleCard extends React.Component {
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
          votes: {votes} || comments: {comment_count}
        </h4>
        <h5>
          Posted By: {author} || {created_at}
        </h5>
      </li>
    );
  }
}

export default ArticleCard;
