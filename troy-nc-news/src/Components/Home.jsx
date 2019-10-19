import React from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Slideshow from "./Slider";

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
          <Slideshow />
          {/* <AwesomeSlider>
            <div data-src="https://images.readwrite.com/wp-content/uploads/2018/04/coding-825x500.jpg" />
            <div data-src="http://www.chesapeakeunited.org/wp-content/uploads/2015/04/Flying-soccer-player-blue.jpg" />
            <div data-src="/path/to/image-2.jpg" />
          </AwesomeSlider> */}
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
