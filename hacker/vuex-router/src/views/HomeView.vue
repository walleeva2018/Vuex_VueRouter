<template>
  <div class="home">
    {{ jsonData }}
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

const jsonData = ref(null);
const store = useStore();

onMounted(() => {
  axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then((response) => {
      jsonData.value = response.data;
      store.commit("setTopStoryID", jsonData.value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
