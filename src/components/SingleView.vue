<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error occurred: {{ error }}</div>
  <div v-else class="banner-container">
    <ul class="banner-list">
      <li class="banner-item">
        <B> By {{ apiResults.by }} :</B><span v-html="apiResults.text"> </span>
        <div v-if="apiResults.kids">
          <div @click="updateComment()" class="clickable-area">
            <div v-if="!comment">
              {{ Object.keys(apiResults.kids).length }} Replies
            </div>
            <div v-else>Hide Replies</div>
          </div>
          <div v-if="comment">
            <div v-for="kid in apiResults.kids" :key="kid">
              <SingleView :arr="kid" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { defineProps } from "vue";
import { onMounted } from "vue";
const apiResults = ref([]);
const loading = ref(true);
const error = ref(null);
const props = defineProps(["arr"]);
const comment = ref(false);
onMounted(async () => {
  const id = props.arr;
  try {
    const responses = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );

    apiResults.value = responses.data;
    loading.value = false;
  } catch (err) {
    error.value = err.message;
    loading.value = false;
  }
});
function updateComment() {
  comment.value = !comment.value;
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
  margin-left: 30px;
}
</style>
