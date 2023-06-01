<template>New Story</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const signal = "NewStory";
store.commit("setCurrentFeed", signal);
</script>
