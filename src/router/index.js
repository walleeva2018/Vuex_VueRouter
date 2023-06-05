import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TopStories from "../views/TopStories.vue";
import Show from "../components/ShowView.vue";
import NewStory from "../views/NewStories.vue";
import BestStory from "../views/BestStories.vue";
import UserView from "../views/UserView.vue";
import CommentView from "../views/CommentViewPage.vue";
import AskView from "../views/AskView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/topstory",
    name: "topstory",
    component: TopStories,
  },
  {
    path: "/show",
    name: "Show",
    component: Show,
  },
  {
    path: "/newstory",
    name: "newstory",
    component: NewStory,
  },
  {
    path: "/beststory",
    name: "beststory",
    component: BestStory,
  },
  {
    path: "/user/:username",
    name: "user",
    component: UserView,
  },
  {
    path: "/comment/:id",
    name: "comments",
    component: CommentView,
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
