<script setup lang="ts">
import Input from '../UI/Input.vue'
import { useIndexStore } from '@/stores/index'

const IndexStore = useIndexStore()
</script>

<template>
  <Transition>
    <div class="input-popup__wrapper" v-if="IndexStore.inputPopupShow">
      <div class="input-popup__countainer">
        <img @click="IndexStore.changePopupShowInput(false)" src="@/assets/image/X.svg" alt="X" />
        <div class="input-popup__countainer__text">
          <div class="input-popup__countainer__text__title">
            <h1>Оставьте заявку</h1>
            <p>Скоро с вами свяжется администратор</p>
          </div>
          <p class="input-popup__countainer__text__agreement">
            Нажимая на кнопку «Отправить», Вы соглашаетесь с
            <a href="#">Политикой конфиденциальности</a>
          </p>
        </div>
        <div class="input-popup__countainer__input">
          <Input backgroundClass="dark" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.input-popup__wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 50;
  background: $black1;
  display: flex;
  align-items: center;
  justify-content: center;
  .input-popup__countainer {
    padding: 40px;
    background: white;
    width: 842px;
    border-radius: 16px;
    display: flex;
    position: relative;
    img {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 34px;
      height: 34px;
      padding: 10px;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .input-popup__countainer__text {
      width: 400px;
      height: 217px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 800px) {
        width: 302px;
      }

      .input-popup__countainer__text__title {
        h1 {
          @include text32;
          font-weight: bold;
          color: $goldV2;
        }
        p {
          @include text16;
          color: $gray;
        }
      }
      .input-popup__countainer__text__agreement {
        @include text12;
        color: $gray;
        a {
          color: $gray;
        }
      }
    }
    .input-popup__countainer__input {
      height: 100%;
      width: 302px;
    }
  }
}
</style>
