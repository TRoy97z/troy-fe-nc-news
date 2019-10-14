import React from "react";
import { Link } from "@reach/router";
import styles from "../styles/ArticleCard.module.css";
import Voter from "./Voter";
import Moment from "react-moment";

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
      <li className={styles.card} key={title}>
        {" "}
        <Link className={styles.title} to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <React.Fragment className={styles.tally}>
          <Voter votes={votes} article_id={article_id} />
          <p>Comments: {comment_count}</p>
        </React.Fragment>
        <h5>
          Posted By: {author} || <Moment date={created_at} fromNow />
        </h5>
      </li>
    );
  }
}

export default ArticleCard;
