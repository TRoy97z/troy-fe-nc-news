import React from "react";

const Errors = props => {
  return (
    <main>
      <h2>{props.status} Error</h2>
      <p>{props.msg}</p>
    </main>
  );
};

export default Errors;
