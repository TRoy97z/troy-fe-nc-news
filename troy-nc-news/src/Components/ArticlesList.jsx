import React from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Sorter from "./Sorter";
import ArticleOrder from "./ArticleOrder";

class ArticleList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sortQuery: null,
    orderQuery: "desc"
  };

  componentDidMount() {
    const { topic } = this.props;
    const { sortQuery, orderQuery } = this.state;
    api.getArticles(topic, sortQuery, orderQuery).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortQuery, orderQuery } = this.state;
    if (
      prevProps.topic !== topic ||
      prevState.sortQuery !== sortQuery ||
      prevState.orderQuery !== orderQuery
    ) {
      api.getArticles(topic, sortQuery, orderQuery).then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      });
    }
  }

  updateSortQuery = query => {
    this.setState({ sortQuery: query });
  };

  updateOrderQuery = query => {
    this.setState({ orderQuery: query });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    } else
      return (
        <React.Fragment>
          <Sorter updateSortQuery={this.updateSortQuery} />
          <ArticleOrder updateOrderQuery={this.updateOrderQuery} />
          <ul>
            {articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </React.Fragment>
      );
  }
}

export default ArticleList;
