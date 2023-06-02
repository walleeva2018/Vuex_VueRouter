<template>
  <div v-if="loading"><ShowView /></div>
  <div v-else>Loading....</div>
</template>
<script setup>
import { useStore } from "vuex";
import ShowView from "../components/ShowView.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
const loading = ref(false);
const store = useStore();
const signal = "BestStory";
store.commit("setCurrentFeed", signal);

onMounted(() => {
  axios
    .get("https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty")
    .then((response) => {
      store.commit("setBestStoryID", response.data);
      loading.value = true;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
