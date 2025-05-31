<script setup lang="ts">
import Bottle from '@/components/Questions/Bottle.vue';
import Preview from '@/components/Questions/Preview.vue';
import { ref, watch } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useTemplateRef } from 'vue';

const el = useTemplateRef('el');
const { width } = useElementSize(el);
const mobileVersion = ref(false);
const startingQuestion = ref(true);

watch(width, (newWidth) => {
  if (newWidth < 1300) {
    mobileVersion.value = true;
  } else {
    mobileVersion.value = false;
  }
});
</script>

<template>
  <div class="questions__wrapper">
    <h1>Рассчитайте стоимость вашего банкета</h1>
    <h2 v-if="mobileVersion">Ответьте на 5 вопросов и получите горку из шампанского в подарок</h2>
    <div ref="el" class="questions__wrapper__content">
      <Preview :class="{ noVisible: mobileVersion && startingQuestion }" />
      <Bottle
        :mobileVersion="mobileVersion"
        @start-question="startingQuestion = false"
        :class="{ noVisible: !startingQuestion }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.noVisible {
  display: none;
}

.questions__wrapper {
  max-width: 1620px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 64px;

  h1 {
    @include text40;
    font-weight: bold;
  }
  @media (max-width: 700px) {
    padding: 0px;
    h1,
    h2 {
      padding: 0 16px;
    }
  }
  .questions__wrapper__content {
    width: 100%;
    margin-top: 13px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
}
</style>
