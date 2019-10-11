import React from "react";
import * as api from "../utils/api";

class User extends React.Component {
  state = {
    user: {},
    isLoading: true
  };
  componentDidMount() {
    const { username } = this.props;
    api
      .getUserByUsername(username)
      .then(user => this.setState({ user, isLoading: false }));
  }

  render() {
    const { user, isLoading } = this.state;
    const { name, avatar_url, username } = user;
    if (isLoading) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <React.Fragment>
          <h2>My Account</h2>
          <h3>Name: {name}</h3>
          <img src={avatar_url} alt="Avatar" />
          <h3>Username: {username}</h3>
        </React.Fragment>
      );
    }
  }
}

export default User;
