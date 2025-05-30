<script setup lang="ts">
import MyBtn from '@/components/UI/MyBtn.vue'
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
    <MyBtn class="bottle__wrapper__button" v-if="mobileVersion" @click="start">
      <p>Начать</p>
      <img src="@/assets/image/Arrow.svg" alt="Bottle" />
    </MyBtn>
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
  .bottle__wrapper__button {
    position: absolute;
    z-index: 5;
    left: 8%;
    bottom: 8%;
    display: flex;
    padding: 14px 32px;
    gap: 16px;
    @include text15;
    cursor: pointer;
    img {
      transform: rotateY(180deg);
    }
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
