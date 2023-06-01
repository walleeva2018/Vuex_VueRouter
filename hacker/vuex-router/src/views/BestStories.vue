<template>Best Story</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const signal = "BestStory";
store.commit("setCurrentFeed", signal);
</script>
