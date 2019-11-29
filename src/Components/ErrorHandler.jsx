import React from "react";
import { navigate } from "@reach/router";

const ErrorHandler = ({ status, msg }) => {
  return (
    <div>
      <h2>{status} Error!</h2>
      <p>{msg}</p>
      <button onClick={backToHomePage}>Back To Homepage</button>
    </div>
  );
};

const backToHomePage = () => {
  navigate("/");
};

export default ErrorHandler;
