<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error occurred: {{ error }}</div>
  <div v-else class="banner-container">
    <ul class="banner-list">
      <li v-for="result in apiResults" :key="result" class="banner-item">
        <B> By {{ result.by }} :</B><span v-html="result.text"> </span>
        <div v-if="result.kids">
          <div @click="updateComment(result)">
            <span v-if="result.comment == false" class="clickable-area"
              >{{ Object.keys(result.kids).length }} Replies
            </span>
            <span v-else class="clickable-area"> Hide Replies </span>
          </div>
          <div v-if="result.comment == true"><CommentVIew /></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
const store = useStore();
const ids = ref(store.getters.getComments);
const apiResults = ref([]);
const loading = ref(true);
const error = ref(null);

async function fetchCurrentPageData() {
  try {
    const requests = ids.value.map((id) =>
      axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )
    );

    const responses = await Promise.all(requests);

    apiResults.value = responses.map((response) => response.data);
    for (const obj of apiResults.value) {
      obj.comment = false;
    }

    loading.value = false;
  } catch (err) {
    error.value = err.message;
    loading.value = false;
  }
}
fetchCurrentPageData();
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
.banner-container {
  background-color: grey;
  padding: 20px;
  justify-content: center;
  align-items: center;
}

.banner-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.banner-item {
  background-color: rgb(255, 207, 119);
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  color: black;
}
.clickable-area {
  cursor: pointer;
  color: blue;
}
</style>
