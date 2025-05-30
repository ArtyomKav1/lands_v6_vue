<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { computed, onMounted, ref } from 'vue'
import { commentsData } from './Feedback.constants'
const modules = [Navigation, Pagination, Scrollbar]
const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)
const navigation = computed(() => ({
  prevEl: prevEl.value,
  nextEl: nextEl.value,
  disabledClass: 'swiper-button-disabled',
}))
onMounted(() => {
  navigation.value.prevEl = prevEl.value
  navigation.value.nextEl = nextEl.value
})
</script>

<template>
  <div class="feedback__wrapper">
    <div class="feedback__countainer">
      <div class="feedback__header">
        <h1>Отзывы о нас</h1>
        <div class="feedback__header-nav">
          <button ref="prevEl" class="feedback__button">
            <img src="@/assets/image/Arrow.svg" alt="" />
          </button>
          <button ref="nextEl" class="feedback__button">
            <img src="@/assets/image/Arrow.svg" style="rotate: 180deg" alt="" />
          </button>
        </div>
      </div>
      <div class="feedback__swiper">
        <swiper
          :modules="modules"
          slides-per-view="auto"
          :space-between="24"
          :navigation="navigation"
        >
          <swiper-slide v-for="comment in commentsData" :key="comment.id">
            <div class="feedback__swiper__slide">
              <img src="@/assets/image/Fed_photo.png" alt="photo" />
              <div class="feedback__swiper__slide__text">
                <h3>{{ comment.name }}</h3>
                <p>{{ comment.text }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback__wrapper {
  max-width: 1588px;
  margin: 0 auto;
  margin-top: 60px;
  height: 476px;

  @media (max-width: 700px) {
    height: 432px;
    margin-top: 30px;
  }

  .feedback__countainer {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: $lightGreyV2;
    padding: 20px;

    .feedback__header {
      padding-top: 25px;
      display: flex;
      gap: 48px;
      margin-bottom: 30px;
      align-items: center;

      @media (max-width: 700px) {
        gap: 85px;
      }
      h1 {
        @include text40;
        font-weight: bold;
        @media (max-width: 700px) {
          @include text20;
        }
      }
      .feedback__header-nav {
        display: flex;
        gap: 20px;

        .feedback__button {
          user-select: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          background: $goldV2;
          height: 52px;
          width: 52px;
          border: none;
          border-radius: 100%;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(110%);
          }

          &.swiper-button-disabled {
            opacity: 80%;

            &:hover {
              transform: scale(100%);
            }
          }
        }
      }
    }

    .feedback__swiper {
      .swiper {
        overflow: visible;
        .swiper-slide {
          width: 520px;

          @media (max-width: 700px) {
            width: 270px;
          }
        }
      }
      .feedback__swiper__slide{
        box-shadow: 0px 8px 16px rgba($color: #222324, $alpha: 0.1);
        height: 280px;
        background: white;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        gap: 24px;

        @media (max-width: 700px) {
          flex-direction: column;
        }

        img {
          width: 72px;
          height: 72px;
          border-radius: 16px;
        }
        .feedback__swiper__slide__text {
          display: flex;
          flex-direction: column;
          gap: 8px;

          h3 {
            @include text20;
            font-weight: bold;
          }

          p {
            @include text14;
            color: $inputTextV2;
            display: -webkit-box;
            -webkit-line-clamp: 9;
            line-clamp: 9;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            @media (max-width: 700px) {
              -webkit-line-clamp: 5;
              line-clamp: 5;
            }
          }
        }
      }
    }
  }
}
</style>
