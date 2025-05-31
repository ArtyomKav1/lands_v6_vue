<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Form from '@/components/Form/Form.vue';
import Pic_1 from '@/components/Picture_1/Picture_1.vue';
import Questions from '@/components/Questions/Questions.vue';
import Pic_2 from '@/components/Picture_2/Picture_2.vue';
import Footer from '@/components/Footer/Footer.vue';
import Feedback from '@/components/Feedback//Feedback.vue';
import InputPopup from '@/components/GlobalPopup//InputPopup.vue';
</script>

<template>
  <div class="app__wrapper">
    <InputPopup />
    <Header />
    <Form />
    <Pic_1 />
    <Questions />
    <Pic_2 />
    <Feedback />
    <Footer />
  </div>
</template>

<style scoped>
.app__wrapper {
  background: white;
  overflow-x: hidden;
}
</style>
