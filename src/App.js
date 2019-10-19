import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ArticleList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import User from "./Components/User";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Nav />
        <Router>
          <Home path="/" />
          <ArticleList path="/articles" />
          <ArticleList path="/articles/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <User path="/users/:username" />
        </Router>
      </main>
    );
  }
}

export default App;
