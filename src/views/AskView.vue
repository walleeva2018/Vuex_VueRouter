<template>
  <div v-if="loading"><ShowView /></div>
  <div v-else>Loading.....</div>
</template>
<script setup>
import { useStore } from "vuex";
import ShowView from "../components/ShowView.vue";
import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
const loading = ref(false);
const store = useStore();
const signal = "AskStory";
store.commit("setCurrentFeed", signal);
onMounted(async () => {
  axios
    .get("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
    .then((response) => {
      store.commit("setAskStoryID", response.data);
      loading.value = true;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
