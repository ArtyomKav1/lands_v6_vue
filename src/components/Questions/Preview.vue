<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { questionsData } from './QuestionForm.constants'
import { useIndexStore } from '@/stores'
import MyBtn from '@/components/UI/MyBtn.vue'
const IndexStore = useIndexStore()
const swiperRef = ref<any>(null)
const activeIndex = ref(0)
const completed = ref(false)

const sendData = ref<string[]>([])

const sendDataItem = ref<string>('')

const goToNextSlide = () => {
  IndexStore.sendDataAnswers.push(sendDataItem.value)
  swiperInstance.value?.slideNext()
  if (IndexStore.sendDataAnswers.length === questionsData.length) {
    console.log(sendData.value)
    completed.value = true
    IndexStore.changePopupShowInput(true)
  }
}
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
    <h1 class="preview__completed" v-if="completed">Спасибо за ваши ответы</h1>
    <div v-else>
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
      >
        <swiper-slide v-for="questionData in questionsData" :key="questionData.id">
          <div class="slide__swiper">
            <h1>{{ questionData.name }}</h1>
            <div class="slide__swiper__wrapper">
              <div
                class="slide__swiper__wrapper__question"
                v-for="(question, index) in questionData.question"
                :key="index"
                @click="sendDataItem = question"
                :class="{ current: sendDataItem === question }"
              >
                {{ question }}
              </div>
            </div>

            <div class="slide__swiper__line"></div>
            <MyBtn
              class="custom-next slide__swiper__button"
              @click="goToNextSlide"
              :disabled="!questionData.question.includes(sendDataItem)"
            >
              {{ activeIndex + 1 !== questionsData.length ? 'Следующий вопрос' : 'Отправить' }}
              <img src="@/assets/image/Arrow.svg" alt="Bottle" />
            </MyBtn>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview__wrapper {
  padding: 32px;
  min-width: 0;
  min-height: 369px;
  background: $lightGreyV2;
  border-radius: 16px;

  .preview__completed {
    margin: 35% 0px;
    text-align: center;
  }

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

    .preview__progress-bar__fill {
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

    .slide__swiper__button {
      @include text15;
      display: flex;
      padding: 14px 12px 14px 32px;
      gap: 16px;
      justify-content: center;
      width: 235px;
      cursor: pointer;
      &:disabled {
        opacity: 80%;
      }
      img {
        transform: rotateY(180deg);
      }
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
      user-select: none;
      .slide__swiper__wrapper__question {
        background: white;
        border: 2px solid white;
        padding: 12px 32px 12px 52px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 1s ease 0s;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 20px;
          top: 15px;
          width: 16px;
          height: 16px;
          border-radius: 100%;
          border: 2.5px solid $gray;
        }
        &.current {
          border: 2px solid $goldV2;
          background-color: rgba($goldV2, 20%);
        }
        &.current::after {
          content: '';
          border: 2.5px solid $goldV2;
        }
        &.current::before {
          content: '';
          position: absolute;
          left: 25px;
          top: 20px;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background: $goldV2;
        }
      }
    }
  }
}
</style>
