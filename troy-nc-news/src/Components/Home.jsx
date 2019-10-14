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
        <React.Fragment>
          <h2>Read All About Our Popular Articles</h2>
          <ul>
            {articles.map(article => {
              return <ArticleCard key={article.title} article={article} />;
            })}
          </ul>
        </React.Fragment>
      );
  }
}

export default Home;
