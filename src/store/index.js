import { createStore } from "vuex";

const store = createStore({
  state: {
    TopStoryID: null,
    currentFeed: null,
    BestStoryID: null,
    NewStoryID: null,
    Commnets: null,
  },
  mutations: {
    setTopStoryID(state, data) {
      state.TopStoryID = data;
    },
    setCurrentFeed(state, date) {
      state.currentFeed = date;
    },
    setBestStoryID(state, data) {
      state.BestStoryID = data;
    },
    setNewStoryID(state, data) {
      state.NewStoryID = data;
    },
    setComments(state, data) {
      state.Commnets = data;
    },
  },
  getters: {
    getTopStoryID(state) {
      return state.TopStoryID;
    },
    getCurrentFeed(state) {
      return state.currentFeed;
    },
    getBestStoryID(state) {
      return state.BestStoryID;
    },
    getNewStoryID(state) {
      return state.NewStoryID;
    },
    getComments(state) {
      return state.Commnets;
    },
  },
});

export default store;
