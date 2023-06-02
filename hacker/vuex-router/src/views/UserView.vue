<template>
  <div v-if="loading == true" class="user-style">
    User {{ $route.params.username }}
    <br />
    <br />
    About: <span v-html="Data.about"></span>
    <br />
    Karma: {{ Data.karma }}
  </div>
  <div v-else>Loading...</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const Data = ref(null);
const loading = ref(false);
onMounted(() => {
  axios
    .get(
      `https://hacker-news.firebaseio.com/v0/user/${route.params.username}.json?print=pretty`
    )
    .then((response) => {
      Data.value = response.data;
      loading.value = true;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>

<style scoped>
.user-style {
  color: blue;
  background-color: black;
}
</style>
