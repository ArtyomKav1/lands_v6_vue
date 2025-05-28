<script setup lang="ts">
import InputForm from '@/components/Form/InputForm.vue'
</script>

<template>
  <div class="form__wrapper">
    <div class="form__limiter">
      <div class="form__wrapper__background">
        <img src="@/assets/image/Img_2.png" alt="фон" />
        <h1>Изысканный свадебный зал с панорамным видом на город</h1>
      </div>
      <InputForm />
    </div>
  </div>
</template>
1180
<style scoped lang="scss">
.form__wrapper {
  max-width: 1588px;
  height: 500px;
  margin: 0 auto;
  margin-top: 24px;
  @media (max-width: 1180px) {
    height: 900px;
  }
  @media (max-width: 760px) {
    height: 700px;
  }
  .form__limiter {
    width: 100%;
    height: 100%;
    position: relative;

    .form__wrapper__background {
      height: 500px;
      @media (max-width: 760px) {
        height: 240px;
      }
      border-radius: 16px;
      position: absolute;
      inset: 0;
      @media (max-width: 1180px) {
        border-radius: 0px;
      }
      h1 {
        position: absolute;
        bottom: 100px;
        left: 50px;
        color: white;
        font-weight: bold;
        @include text48;
        z-index: 3;
        max-width: 50%;
        @media (max-width: 1180px) {
          max-width: 80%;
          text-align: center;
        }
        @media (max-width: 760px) {
          @include text24;
          bottom: 50px;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
        transform: rotateY(180deg);
        @media (max-width: 1180px) {
          border-radius: 0px;
        }
      }
      &::after {
        content: '';
        border-radius: 16px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: rgba(0, 0, 0, 0.4);
        @media (max-width: 1180px) {
          border-radius: 0px;
        }
      }
    }
  }
}
</style>
