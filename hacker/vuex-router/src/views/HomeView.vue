<template>
  <div class="home">
    {{ Data }}
    <img
      alt="Hacker Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCVbPndDMqRQBsns65_x6j-57k_x5X9-vKXM_L3Y5&s"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";

const Data = ref(null);
const store = useStore();

onMounted(() => {
  axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then((response) => {
      Data.value = response.data;
      store.commit("setTopStoryID", Data.value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios
    .get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    .then((response) => {
      Data.value = response.data;
      store.commit("setNewStoryID", Data.value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios
    .get("https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty")
    .then((response) => {
      Data.value = response.data;
      store.commit("setBestStoryID", Data.value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
