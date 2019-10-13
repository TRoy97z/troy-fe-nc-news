import React from "react";
import * as api from "../utils/api";
import CommentsList from "../Components/CommentsList";
import Voter from "./Voter";

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }
  render() {
    const { article, isLoading } = this.state;
    const { article_id, title, votes, author, created_at, body } = article;
    if (isLoading) {
      return <h2>Loading...</h2>;
    } else
      return (
        <React.Fragment>
          <h2>{title}</h2>
          <h5>
            Posted By: {author} || {created_at}
          </h5>
          <p>{body}</p>
          <Voter votes={votes} article_id={article_id} />
          <ul>
            <CommentsList key={article.article_id} article_id={article_id} />
          </ul>
        </React.Fragment>
      );
  }
}

export default SingleArticle;
