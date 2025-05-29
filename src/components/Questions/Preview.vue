<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiperRef = ref<any>(null)
const activeIndex = ref(0)

const completed = ref(false)



const sendData = ref<string[]>([])
const sendDataItem = ref<string>('')

const goToNextSlide = () => {
  sendData.value.push(sendDataItem.value)
  swiperInstance.value?.slideNext()
  if( sendData.value.length === questionsData.length){
    console.log(sendData.value)
    completed.value = true
  }
}








const questionsData = [
  {
    id: crypto.randomUUID(),
    name: 'Количество гостей',
    question: ['5-30', '30-60', '60-80', '80-100', '100-120'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Бюджет',
    question: [
      '5 000-30 000',
      '30 000-60 000',
      '60 000-80 000',
      '80 000-100 000',
      '100 000-120 000',
    ],
  },
  {
    id: crypto.randomUUID(),
    name: 'Месяц',
    question: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
  },
]
const swiperInstance = ref<any>(null)
const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}
const progress = computed(() => {
  return ((activeIndex.value + 1) / questionsData.length) * 100
})

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex
}


</script>

<template>

  <div class="preview__wrapper">
    <div>
    <div class="preview__counter">Вопрос {{ activeIndex + 1 }} из {{ questionsData.length }}</div>
    <div class="preview__progress-bar">
      <div class="preview__progress-bar__fill" :style="{ width: `${progress}%` }"></div>
    </div>

    <swiper
      ref="swiperRef"
      @swiper="onSwiper"
      :modules="[Pagination]"
      :slides-per-view="1"
      :space-between="24"
      :allow-touch-move="false"
      :simulate-touch="false"
      @slide-change="onSlideChange"
      :pagination="{
        clickable: true,
        type: 'bullets',
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
      }"
    >
      <swiper-slide v-for="questionData in questionsData" :key="questionData.id">
        <div class="slide__swiper">
          <h1>{{ questionData.name }}</h1>
          <div class="slide__swiper__wrapper">
            <div
              class="slide__swiper__wrapper__question"
              v-for="(question, index) in questionData.question"
              :key="index"
              @click="sendDataItem=question"

              :class="{ current: sendDataItem === question }"


            >
              {{ question }}
            </div>
          </div>

          <div class="slide__swiper__line"></div>
          <button class="custom-next" @click="goToNextSlide" :disabled="!questionData.question.includes(sendDataItem)" >
            {{ activeIndex + 1 !== questionsData.length ? 'Следующий вопрос' : 'Отправить' }}
          </button>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview__wrapper {
  padding: 32px;
  min-width: 0;
  min-height: 369px;
  background: $lightGreyV2;
  border-radius: 16px;

  .preview__counter {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: black;
  }

  .preview__progress-bar {
    height: 4px;
    background: $platinum;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 16px;

    &__fill {
      height: 100%;
      background: $goldV2;
      transition: width 0.3s ease;
    }
  }

  .slide__swiper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;

    button {

      padding: 14px 24px 14px 32px;
      background: $goldV2;
      color: white;
      border: none;
      border-radius: 4px;
      width: 235px;
      cursor: pointer;
    }

    .slide__swiper__line {
      width: 100%;
      height: 1px;
      background: white;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 1px;
        width: 100%;
        height: 1px;
        background: $platinum;
      }
    }

    .slide__swiper__wrapper {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;

      .slide__swiper__wrapper__question {
        background: white;
        padding: 12px 32px 12px 22px;
        border-radius: 4px;
        &.current{
          border: 2px solid $goldV2;
          background-color: lighten($goldV2, 40%);
        }
      }
    }
  }
}
</style>
