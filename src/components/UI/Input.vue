<script setup lang="ts">
import { IMaskComponent } from 'vue-imask'
import { useIndexStore } from '@/stores'
import { ref } from 'vue'
defineProps<{
  theme?: string
}>()
const IndexStore = useIndexStore()
const errors = ref<{ name?: string; telNumber?: string }>({})
const validate = () => {
  errors.value = {}

  if (!IndexStore.name.trim()) {
    errors.value.name = 'Введите имя'
  }

  if (IndexStore.telNumber.length < 10) {
    errors.value.telNumber = 'Введите номер'
  }

  return Object.keys(errors.value).length === 0
}

const onSend = () => {
  if (!validate()) return
  IndexStore.sendData()
}
</script>

<template>
  <div class="inputForm__input__block">
    <div class="inputForm__input__block__item" :class="theme">
      <label for="">Ваше имя</label>
      <input type="text" v-model="IndexStore.name" placeholder="Имя" />
      <span class="error" v-if="errors.name">{{ errors.name }}</span>
    </div>

    <div class="inputForm__input__block__item" :class="theme">
      <label for="">Ваш номер телефона</label>
      <IMaskComponent
        v-model="IndexStore.telNumber"
        :lazy="false"
        :placeholder="'+7(___)___-__-__'"
        :mask="'+{7} (000) 000-00-00'"
        class="hcl"
        inputmode="tel"
      />
      <span class="error" v-if="errors.telNumber">{{ errors.telNumber }}</span>
    </div>
    <button @click="onSend">Забронировать</button>
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
      color: $black2;
    }
    &.swith {
      @media (min-width: 1180px) {
        color: white;
      }
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
.error {
  color: red;
  opacity: 80%;
  font-size: 12px;
  margin-top: 4px;
}
</style>
