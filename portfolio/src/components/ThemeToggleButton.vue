<script setup>
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  }
</script>

<template>
  <div>
    <button @click="toggleTheme">Toggle</button>
  </div>
</template>
