import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ArticleList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <ArticleList path="/articles" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </main>
  );
}

export default App;
