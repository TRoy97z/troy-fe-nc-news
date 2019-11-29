import React from "react";
import { navigate } from "@reach/router";

const EndpointError = props => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={backToHomePage}>Back To Homepage</button>
    </div>
  );
};

const backToHomePage = () => {
  navigate("/");
};
export default EndpointError;
