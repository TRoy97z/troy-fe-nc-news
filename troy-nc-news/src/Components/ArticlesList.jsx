import React from "react";
import ArticleCard from "./ArticleCard";
// import { Link } from "@reach/router";
import * as api from "../utils/api";

class ArticleList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };
  componentDidMount() {
    api.getArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    } else
      return (
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} />;
          })}
        </ul>
      );
  }
}

export default ArticleList;
