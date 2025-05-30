<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn {
  background: #c6af66;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  transition: all 1s ease 0s;
}
</style>
