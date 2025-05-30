<script setup lang="ts">
import Input from '@/components/UI/Input.vue'
</script>
<template>
  <div class="inputForm__wrapper">
    <h1>Узнайте свободные даты и забронируйте зал</h1>
    <Input backgroundClass="light" />
  </div>
</template>

<style scoped lang="scss">

.inputForm__wrapper {
  padding: 40px;
  width: 382px;
  height: 387px;
  background: rgba($color: white, $alpha: 0.15);
  position: absolute;
  z-index: 3;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  // filter: blur(16px);
  border: 1px solid white;
  right: 7%;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 1180px) {
    border: 1px SOLID black;
    top: 520px;
    right: 50%;
    transform: translateX(50%);
    border: none;
    box-shadow: 0px 4px 4px rgba(#000000, 0.1);

  }
  @media (max-width: 760px) {
    top: 239px;
    backdrop-filter: none;
    border-radius: 0px 0px 16px 16px ;
  }
  h1 {
    @include text24;
    color: white;
    @media (max-width: 1180px) {
      color: $black1;
    }


  }
}
</style>
