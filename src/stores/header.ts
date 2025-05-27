import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  const popupShow = ref(false)
  const currentPage = ref(1)
  
  // const doubleCount = computed(() => count.value * 2)
  function changePopupShow(arg: boolean) {
    popupShow.value = arg
  }
  function changeCurrentPage(page: number) {
    const currentPage = ref(1)
    currentPage.value = page
  }

  return { changePopupShow, changeCurrentPage, popupShow, currentPage }
})
