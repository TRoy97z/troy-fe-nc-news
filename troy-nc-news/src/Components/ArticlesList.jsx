import React from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

class ArticleList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    const { topic } = this.props;
    api.getArticles(topic).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      api.getArticles(topic).then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      });
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    } else
      return (
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      );
  }
}

export default ArticleList;
