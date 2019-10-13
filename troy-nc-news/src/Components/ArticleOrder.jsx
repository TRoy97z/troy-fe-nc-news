import React from "react";

const ArticleOrder = ({ updateOrderQuery }) => {
  const handleChange = event => {
    const { value } = event.target;
    updateOrderQuery(value);
  };
  return (
    <form>
      <label>
        <input
          type="radio"
          name="orderBy"
          value="desc"
          onChange={handleChange}
          defaultChecked
        ></input>
        Descending
      </label>
      <label>
        <input
          type="radio"
          name="orderBy"
          value="asc"
          onChange={handleChange}
        ></input>
        Ascending
      </label>
    </form>
  );
};

export default ArticleOrder;
