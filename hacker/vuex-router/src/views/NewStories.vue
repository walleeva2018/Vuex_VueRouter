<template><ShowView /></template>
<script setup>
import { useStore } from "vuex";
import ShowView from "../components/ShowView.vue";
import { onMounted } from "vue";
import axios from "axios";
const store = useStore();
const signal = "NewStory";
store.commit("setCurrentFeed", signal);
onMounted(() => {
  axios
    .get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    .then((response) => {
      store.commit("setNewStoryID", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
