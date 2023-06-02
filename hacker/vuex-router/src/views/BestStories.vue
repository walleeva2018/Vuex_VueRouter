<template><ShowView /></template>
<script setup>
import { useStore } from "vuex";
import ShowView from "../components/ShowView.vue";
import { onMounted } from "vue";
import axios from "axios";
const store = useStore();
const signal = "BestStory";
store.commit("setCurrentFeed", signal);

onMounted(() => {
  axios
    .get("https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty")
    .then((response) => {
      store.commit("setBestStoryID", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
