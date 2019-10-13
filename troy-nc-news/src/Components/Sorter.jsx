import React from "react";

const Sorter = ({ updateSortQuery }) => {
  const handleChange = event => {
    const { value } = event.target;
    updateSortQuery(value);
  };
  return (
    <form>
      <select onChange={handleChange}>
        <option value="">No Filter</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="created_at">Created At</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
    </form>
  );
};

export default Sorter;
