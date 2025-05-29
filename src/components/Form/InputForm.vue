<script setup lang="ts">

import { IMaskComponent } from 'vue-imask';

import { ref, watch } from 'vue';


const telephonNumber = ref('')
const name = ref('')

const sendData = () => {
  console.log("name:",  name.value,"telephonNumber:",  telephonNumber.value)
}


</script>
<template>
  <div class="inputForm__wrapper">
    <h1>Узнайте свободные даты и забронируйте зал</h1>
    <div class="inputForm__input__block">
        <div class="inputForm__input__block__item">
            <label for="" >Ваше имя</label>
            <input type="text" v-model="name" placeholder="Имя"></input>
        </div>

        <div class="inputForm__input__block__item">
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
  </div>
</template>

<style scoped lang="scss">
.hcl{
  height: 52px !important;
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  @include text14;}
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
    border: 1PX SOLID black;
    top: 520px;
    right: 50%;
    transform: translateX(50%);
  }
  @media (max-width: 760px) {
    top: 280px;
      }
  h1{
    @include text24;
    color: white;
    // text-align: center;
  }
  .inputForm__input__block{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .inputForm__input__block__item{
        display: flex;
        flex-direction: column;
        gap: 5px;
        @include text12;
        color: white;
        input{
            height: 52px;
            border-radius: 4px;
            border: none;
            @include text14;
            padding: 0px 16px;
        }
    }
    button{
        padding: 14px 32px;
        background: $goldV2;
        color: white;
        border: none;
        border-radius: 4px;
        width: 173px;
        cursor: pointer;

    }
  }
}
</style>
