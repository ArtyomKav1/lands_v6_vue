import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIndexStore = defineStore('index', () => {
  const headerPopupShow = ref(false);
  const inputPopupShow = ref(false);
  const currentPageHeader = ref(1);
  const name = ref('');
  const telNumber = ref('');
  const sendDataAnswers = ref<string[]>([]);
  const isLoadingFetch = ref(false);
  const errorFetch = ref<string | null>(null);

  function changePopupShowHeader(arg: boolean) {
    headerPopupShow.value = arg;
  }
  function changePopupShowInput(arg: boolean) {
    inputPopupShow.value = arg;
  }
  function changePageHeader(page: number) {
    currentPageHeader.value = page;
  }

  async function sendData() {
    isLoadingFetch.value = true;
    errorFetch.value = null;
    console.log(name.value);
    console.log(telNumber.value);
    console.log(sendDataAnswers.value);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    } catch {
      errorFetch.value = 'Неизвестная ошибка';
    } finally {
      isLoadingFetch.value = false;
      changePopupShowInput(false);
    }

    name.value = '';
    telNumber.value = '';
    sendDataAnswers.value = [];
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
    isLoadingFetch,
    errorFetch,
  };
});
