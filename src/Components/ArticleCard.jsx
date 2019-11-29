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
        <Link className={styles.link} to={`/articles/${article_id}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <div className={styles.votes}>
          <Voter votes={votes} article_id={article_id} />
        </div>
        <div className={styles.body}>
          <p>Comments({comment_count})</p>
          <h5>
            Posted By: {author} | <Moment date={created_at} fromNow />
          </h5>
        </div>
      </li>
    );
  }
}

export default ArticleCard;
