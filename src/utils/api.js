import axios from "axios";

const request = axios.create({
  baseURL: "https://troy-nc-news.herokuapp.com/api"
});

export const getPopularArticles = async () => {
  const { data } = await request.get("/articles?sort_by=comment_count");
  return data;
};

export const getArticles = async (topic, sort_by, order) => {
  const { data } = await request.get("/articles", {
    params: { topic, sort_by, order }
  });
  return data;
};

export const getArticleById = async id => {
  const { data } = await request.get(`/articles/${id}`);
  return data.article;
};

export const getCommentsByArticleId = async id => {
  const { data } = await request.get(`/articles/${id}/comments`);
  return data.comments;
};

export const postCommentByArticleId = async (id, comment) => {
  const { data } = await request.post(`/articles/${id}/comments`, comment);
  return data.comment;
};

export const deleteCommentByCommentId = async id => {
  const { data } = await request.delete(`/comments/${id}`);
  return data;
};

export const getTopics = async () => {
  const { data } = await request.get("/topics");
  return data;
};

export const getUserByUsername = async username => {
  const { data } = await request.get(`/users/${username}`);
  return data.user;
};

export const patchArticleVotes = async (id, inc_votes) => {
  const { data } = await request.patch(`/articles/${id}`, { inc_votes });
  return data;
};

export const patchCommentVotes = async (id, inc_votes) => {
  const { data } = await request.patch(`/comments/${id}`, { inc_votes });
  return data;
};
