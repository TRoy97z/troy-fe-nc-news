import React from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class Nav extends React.Component {
  state = {
    topics: [],
    username: "grumpy19"
  };
  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState(topics);
    });
  }

  render() {
    const { topics, username } = this.state;
    return (
      <nav>
        <Link to="/">Home </Link>
        <Link to="/articles">Articles </Link>
        {topics.map(topic => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={`${topic.slug}`}>
              {topic.slug}{" "}
            </Link>
          );
        })}
        <Link to={`/users/${username}`}>Account</Link>
      </nav>
    );
  }
}

export default Nav;
