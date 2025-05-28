<script setup lang="ts">
defineProps<{
  mobileVersion: boolean
}>()
const emit = defineEmits(['start-question'])
const start = () => {
  emit('start-question')
}
</script>
<template>
  <div class="bottle__wrapper">
    <h1 v-if="!mobileVersion">Ответьте на 5 вопросов и получите горку из шампанского в подарок</h1>
    <button v-if="mobileVersion" @click="start">Начать</button>
    <img class="bottle__wrapper__bottle" src="@/assets/image/Bottle.png" alt="Bottle" />
    <img class="bottle__wrapper__background" src="@/assets/image/Ellipse.png" alt="Ellipse" />
  </div>
</template>

<style scoped lang="scss">
.bottle__wrapper {
  flex-shrink: 0;

  width: 650px;
  height: 369px;
  background: $lightGreyV2;
  border-radius: 16px;
  position: relative;
  @media (max-width: 1320px) {
    width: 100%;
    padding: 0px;
  }
  h1 {
    @include text24;
    color: $black1;
    width: 70%;

    z-index: 2;
    position: absolute;
    bottom: 30px;
    left: 40px;
  }
  button {
    padding: 14px 24px 14px 32px;
    background: $goldV2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 5;
    position: absolute;
    bottom: 30px;
    left: 40px;
  }
  .bottle__wrapper__bottle {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
  }
  .bottle__wrapper__background {
    position: absolute;
    right: 0;
    z-index: 1;
  }
}
</style>
