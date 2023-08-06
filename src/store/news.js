import router from "@/router";
import Axios from "axios";

const state = () => ({
  news: [],
  headers: {
    // q: "apple",
    // from: "2023-08-04",
    // to: "2023-08-04",
    country: "us",
    sortBy: "popularity",
    pageSize: 20,
    apiKey: "c5c4b220d92d4778a3896c02189dd68c",
  },
});
const mutations = {
  setNews(state, param) {
    state.news = param;
  },
  fetchDetail(state, param) {
    state.news = state.news.find((news) => news.title == param);
    router.push({
      name: "DetailNews",
      params: { slug: param.replaceAll(" ", "-") },
    });
  },
  fetchByCategory(state, param) {
    state.headers["category"] = param;
    state.headers["q"] = "";
  },
  fetchByKey(state, param) {
    state.headers["category"] = "";
    state.headers["q"] = param;
  },
};
const actions = {
  fetchNews(store) {
    Axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: store.state.headers,
    }).then((response) => {
      store.commit("setNews", response.data.articles);
    });
  },
};
// const getters = {};

export default {
  state,
  mutations,
  actions,
};
