import React from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";

class Home extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };
  componentDidMount() {
    api.getPopularArticles().then(({ articles }) => {
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

export default Home;
