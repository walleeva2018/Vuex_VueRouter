<template>
  <div class="home">
    <img
      alt="Hacker Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCVbPndDMqRQBsns65_x6j-57k_x5X9-vKXM_L3Y5&s"
    />
  </div>
  <div class="typewriter">Welcome to Hacker News</div>
</template>

<script setup></script>
<style setup>
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(40, end), blink-caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
