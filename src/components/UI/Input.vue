<script setup lang="ts">
import { IMaskComponent } from 'vue-imask'

import { ref } from 'vue'
defineProps<{
    backgroundClass: string
}>()
const telephonNumber = ref('')
const name = ref('')

const sendData = () => {
  console.log('name:', name.value, 'telephonNumber:', telephonNumber.value)
}
</script>

<template>
  <div class="inputForm__input__block">
    <div class="inputForm__input__block__item" :class="backgroundClass">
      <label for="">Ваше имя</label>
      <input type="text" v-model="name" placeholder="Имя" />
    </div>

    <div class="inputForm__input__block__item" :class="backgroundClass">
      <label for="">Ваш номер телефона</label>
      <IMaskComponent
        v-model="telephonNumber"
        :lazy="false"
        :placeholder="'+7(___)___-__-__'"
        :mask="'+{7} (000) 000-00-00'"
        class="hcl"
      />
    </div>
    <button @click="sendData">Забронировать</button>
  </div>
</template>

<style scoped lang="scss">
.inputForm__input__block {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .inputForm__input__block__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    @include text12;

    input {
      height: 52px;
      border-radius: 4px;
      border: none;
      @include text14;
      padding: 0px 16px;
      background: $platinum;
    }
    &.dark  {
      color: $gray;
    }
    &.light {
      color: white;
    }
  }

  button {
    padding: 14px 32px;
    background: $goldV2;
    color: white;
    border: none;
    border-radius: 4px;
    width: 173px;
    cursor: pointer;
  }
}
</style>
