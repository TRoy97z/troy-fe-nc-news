import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ArticleList from "./Components/ArticlesList";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./Components/Home";

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <ArticleList path="/articles" />
      </Router>
    </main>
  );
}

export default App;
