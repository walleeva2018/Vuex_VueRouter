<template><ShowView /></template>
<script setup>
import { useStore } from "vuex";
import ShowView from "../components/ShowView.vue";
const store = useStore();
const signal = "NewStory";
store.commit("setCurrentFeed", signal);
</script>
