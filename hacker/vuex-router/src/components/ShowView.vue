<template>
  <div>
    <router-view />
    <h1>{{ call }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error occurred: {{ error }}</div>
    <div v-else class="banner-container">
      <ul class="banner-list">
        <li v-for="result in apiResults" :key="result" class="banner-item">
          <div v-if="result.url">
            <a :href="result.url" target="empty"> {{ result.title }}</a>
            <br />
            Created by
            <router-link
              :to="{
                name: 'user',
                params: {
                  username: `${result.by}`,
                },
              }"
              >{{ result.by }}</router-link
            >
            at
            <span v-if="result.time">
              {{ Date(result.time * 1000).toLocaleString() }}</span
            >
            <br />
            <br />
            <div @click="updateComment(result)">
              <span v-if="!result.comment">
                <span v-if="result.kids" class="clickable-area">
                  {{ Object.keys(result.kids).length }} comments
                </span></span
              >
              <span v-else class="clickable-area">
                Hide Comments
                <br />
              </span>
            </div>
            <div v-if="result.comment"><CommentView /></div>
            <br />
          </div>
          <div v-else>{{ result.title }}</div>
        </li>
      </ul>
    </div>
    Page : {{ currentPage }} <br />
    <button @click="previousPage" :disabled="currentPage === 1">
      Previous
    </button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import CommentView from "./CommentVIew.vue";
const store = useStore();
const call = store.getters.getCurrentFeed;
const ids = ref([]);
if (store.getters.getCurrentFeed == "TopStory") {
  ids.value = store.getters.getTopStoryID;
} else if (store.getters.getCurrentFeed == "NewStory") {
  ids.value = store.getters.getNewStoryID;
} else if (store.getters.getCurrentFeed == "BestStory") {
  ids.value = store.getters.getBestStoryID;
}

const resultsPerPage = 10;
const apiResults = ref([]);
const currentPage = ref(1);
const loading = ref(true);
const error = ref(null);

const totalPages = computed(() => Math.ceil(ids.value.length / resultsPerPage));
onMounted(async () => {
  fetchCurrentPageData();
});

async function fetchCurrentPageData() {
  try {
    const startIndex = (currentPage.value - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const pageIds = ids.value.slice(startIndex, endIndex);

    const requests = pageIds.map((id) =>
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

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
  fetchCurrentPageData();
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
  fetchCurrentPageData();
}
function updateComment(result) {
  {
    {
      store.commit("setComments", result.kids);
    }
  }
  result.comment = !result.comment;
}
</script>

<style>
.banner-container {
  background-color: #f5f5f5;
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
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
}
.clickable-area {
  cursor: pointer;
  color: blue;
}
</style>
