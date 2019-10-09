import axios from "axios";

const request = axios.create({
  baseURL: "https://troy-nc-news.herokuapp.com/api"
});

export const getPopularArticles = async () => {
  const { data } = await request.get("/articles?sort_by=comment_count");
  return data;
};

export const getArticles = async () => {
  const { data } = await request.get("/articles");
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
