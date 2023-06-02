<template>
  <div v-if="loading == true" class="post-design">
    <h2 class="title">User {{ $route.params.username }}</h2>
    <br />
    <br />
    <div class="content">About: <span v-html="Data.about"></span></div>
    <br />
    <div class="author">Karma: {{ Data.karma }}</div>
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
.post-design {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-design .title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.post-design .content {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 15px;
}

.post-design .author {
  font-size: 12px;
  color: #999;
}

.post-design .author span {
  font-weight: bold;
}
</style>
