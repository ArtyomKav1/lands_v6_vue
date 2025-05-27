<script setup lang="ts">
import { useHeaderStore } from '@/stores/header.ts'
const HeaderStore = useHeaderStore()
defineProps<{
  dataNavs: string[]
}>()
</script>

<template>
  <Transition>
    <div v-if="HeaderStore.popupShow" class="header__popup">
      <button class="header__popup_close" @click="HeaderStore.changePopupShow(false)">
        <img width="24" src="@/assets/image/X.svg" alt="" />
      </button>

      <div>
        <a href="/"
          ><img
            width="109"
            height="56"
            src="@/assets/image/Logo_hotel_black.svg"
            alt="Hotel Stavropol Logo"
        /></a>
        <div class="header__popup__nav">
          <button
            v-for="(nav, index) in dataNavs"
            :key="index"
            @click="HeaderStore.changeCurrentPage(index)"
            class="header__nav-item"
            :class="{ active: index === HeaderStore.currentPage }"
          >
            {{ nav }}
          </button>
        </div>
        <div class="header__popup__address">
          <img width="24" height="24" src="@/assets/image/Geo_tag.svg" alt="Адрес" />
          <div>
            г. Ставрополь,<br />
            ул. Пушкина 272
          </div>
        </div>
        <div class="hheader__popup__mobile">
          <div>+7 (123) 45-67-89</div>
          <div><a href="">Перезвоните мне</a></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
.header__popup_close {
  background: white;
  border: none;
  position: absolute;
  right: 30px;
  top: 30px;
}
.hheader__popup__mobile {
  margin-top: 20px;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.hheader__popup__mobile a {
  color: #c6b067;
  font-size: 15px;
}
.header__popup {
  overflow-y: auto;
  padding: 20px;
  position: fixed;
  z-index: 10;
  inset: 0px;
  background: white;
}
.header__popup__address {
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  line-height: 24px;
  margin-top: 20px;
}
.header__popup__nav {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 20px;
}
.header__nav-item {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}
</style>
