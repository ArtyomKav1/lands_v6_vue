<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

// Импорт стилей
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { ref } from 'vue'

const modules = [Navigation, Pagination, Scrollbar]

const onSwiper = (swiper: any) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const commentsData = ref([
  {
    id: 1,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 2,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 1,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 2,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 1,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 2,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 1,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },
  {
    id: 2,
    name: 'Екатерина Константинопольская',
    text: 'Это восторг!😍 19.10.2022 г. мы провели свою свадьбу...',
  },

])
</script>

<template>
  <div class="feedback__wrapper">
    <div class="feedback__countainer">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        :navigation="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="comment in commentsData" :key="comment.id">
          <div class="slide-content">
            <h3>{{ comment.name }}</h3>
            <p>{{ comment.text }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback__wrapper {
  max-width: 1620px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 60px;
  height: 476px;
  
  .feedback__countainer {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: $lightGreyV2;
    padding: 20px;
    
    // Стили для навигации Swiper
    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      color: #000;
    }
    
    :deep(.swiper-pagination-bullet-active) {
      background: #000;
    }
    
  }
  
  .slide-content {
    height: 280px;
    width: 520px;
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
}
</style>
