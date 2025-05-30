import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', () => {
  const headerPopupShow = ref(false)
  const inputPopupShow = ref(false)
  const currentPageHeader = ref(1)
  const name = ref('')
  const telNumber = ref('')
  const sendDataAnswers = ref<string[]>([])

  // const doubleCount = computed(() => count.value * 2)

  function changePopupShowHeader(arg: boolean) {
    headerPopupShow.value = arg
  }
  function changePopupShowInput(arg: boolean) {
    inputPopupShow.value = arg
  }
  function changePageHeader(page: number) {
    currentPageHeader.value = page
  }

  function sendData() {
    changePopupShowInput(false)
    alert(name.value)
    alert(telNumber.value)
    alert(sendDataAnswers.value)
    name.value = ''
    telNumber.value = ''
    sendDataAnswers.value = []
  }

  return {
    headerPopupShow,
    inputPopupShow,
    currentPageHeader,
    changePopupShowHeader,
    changePopupShowInput,
    changePageHeader,
    name,
    telNumber,
    sendDataAnswers,
    sendData,
  }
})
