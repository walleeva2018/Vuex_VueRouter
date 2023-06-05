<template>
  <div v-if="loading" class="post-design">
    <h2 class="title">Hacker News</h2>
    <a :href="Data.url" target="empty">
      <p class="content">{{ Data.title }}</p>
    </a>
    <p class="author">
      Posted by: <span>{{ Data.by }}</span>
      {{ updateComment(Data) }}
      <CommentView />
    </p>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
import CommentView from "../components/CommentVIew.vue";
import { useStore } from "vuex";
const Data = ref(false);
const loading = ref(false);
const route = useRoute();
const store = useStore();
onMounted(() => {
  axios
    .get(
      `https://hacker-news.firebaseio.com/v0/item/${route.params.id}.json?print=pretty`
    )
    .then((response) => {
      Data.value = response.data;
      loading.value = true;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
function updateComment(result) {
  {
    {
      store.commit("setComments", result.kids);
    }
  }
  result.comment = !result.comment;
}
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
