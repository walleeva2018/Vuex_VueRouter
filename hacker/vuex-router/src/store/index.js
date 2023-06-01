import { createStore } from "vuex";

const store = createStore({
  state: {
    TopStoryID: null,
    currentFeed: null,
  },
  mutations: {
    setTopStoryID(state, data) {
      state.TopStoryID = data;
    },
    setCurrentFeed(state, date) {
      state.currentFeed = date;
    },
  },
  getters: {
    getTopStoryID(state) {
      return state.TopStoryID;
    },
    getCurrentFeed(state) {
      return state.currentFeed;
    },
  },
});

export default store;
