import React from "react";
import * as api from "../utils/api";
import CommentsList from "../Components/CommentsList";
import Voter from "./Voter";
import Moment from "react-moment";
import ErrorHandler from "./ErrorHandler";

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article, isLoading: false, error: null });
      })
      .catch(error => {
        const { msg } = error.response.data;
        const { status } = error.response;
        this.setState({ error: { status, msg }, isLoading: false });
      });
  }

  render() {
    const { article, isLoading, error } = this.state;
    const { article_id, title, votes, author, created_at, body } = article;
    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <ErrorHandler status={error.status} msg={error.msg} />;
    return (
      <main>
        <React.Fragment>
          <h2>{title}</h2>
          <h5>
            Posted By: {author} || <Moment date={created_at} fromNow />
          </h5>
          <p>{body}</p>
          <Voter votes={votes} article_id={article_id} />
          <ul>
            <CommentsList key={article.article_id} article_id={article_id} />
          </ul>
        </React.Fragment>
      </main>
    );
  }
}

export default SingleArticle;
