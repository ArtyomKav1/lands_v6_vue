<template>
  <div class="questions__wrapper">
    questions
  </div>
</template>

<script setup lang="ts">
// Импорты
import { ref } from 'vue'

// Логика
const data = ref(null)
</script>

<style scoped>
.questions__wrapper{
  background: yellow;
  opacity: 50%;

  
  max-width: 1620px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 20px;
  height: 430px;
}
</style>