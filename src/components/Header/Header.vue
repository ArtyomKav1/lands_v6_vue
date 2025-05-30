<script setup lang="ts">
import MyBtn from '@/components/UI/MyBtn.vue'
import Popup from './Popup.vue'
import { dataNavs } from './Header.constants'
import { useIndexStore } from '@/stores'
const IndexStore = useIndexStore()
</script>

<template>
  <div class="header__wrapper">
    <div class="header__limiter">
      <div class="header__wrapper__top">
        <div class="header__wrapper__top__left">
          <div class="header__menu__button__popup">
            <button @click="IndexStore.changePopupShowHeader(true)"></button>
          </div>
          <a href="/"
            ><img
              width="109"
              height="56"
              src="@/assets/image/Logo_hotel_black.svg"
              alt="Hotel Stavropol Logo"
          /></a>
        </div>
        <div class="header__wrapper__top__btn">
          <MyBtn @click="IndexStore.changePopupShowInput(true)">Позвонить</MyBtn>
        </div>

        <div class="header__wrapper__top__right">
          <div class="header__wrapper__top__right__address">
            <img width="24" height="24" src="@/assets/image/Geo_tag.svg" alt="Адрес" />
            <div>
              г. Ставрополь,<br />
              ул. Пушкина 272
            </div>
          </div>
          <div class="header__wrapper__top__right__social">
            <div>
              <img width="24" height="24" src="@/assets/image/Tg.svg" alt="Telegram" />
            </div>
            <div>
              <img width="24" height="24" src="@/assets/image/Whatsapp.svg" alt="WhatsApp" />
            </div>
          </div>
          <div class="header__wrapper__top__right__mobile">
            <div>+7 (123) 45-67-89</div>
            <div><a href="#" @click="IndexStore.changePopupShowInput(true)">Перезвоните мне</a></div>
          </div>
        </div>
      </div>

      <div class="header__wrapper__bottom">
        <button
          v-for="(nav, index) in dataNavs"
          :key="index"
          @click="IndexStore.changePageHeader(index)"
          class="header__nav-item"
          :class="{ active: index === IndexStore.currentPageHeader }"
        >
          {{ nav }}
        </button>
      </div>
    </div>

    <Popup :dataNavs="dataNavs" />
  </div>
</template>

<style scoped lang="scss">
.header__wrapper {
  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  position: relative;

  .header__popup {
    padding: 20px;
    position: fixed;
    z-index: 10;
    inset: 0px;
    background: white;
  }

  .header__limiter {
    max-width: 1620px;
    padding: 0 16px;
    margin: 0 auto;
    height: 144px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    align-items: center;
    @media (max-width: 1040px) {
      height: 72px;
    }
    .header__wrapper__top {
      margin-top: 12px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .header__wrapper__top__left {
        display: flex;
        align-items: center;
        gap: 16px;
        img {
          @media (max-width: 1040px) {
            width: 70px;
            height: 40px;
          }
        }
        .header__menu__button__popup {
          width: 24px;
          height: 24px;
          margin-bottom: 11px;
          display: none;
          @media (max-width: 1040px) {
            display: block;
          }
          button {
            border: none;
            background: $goldV2;
            width: 18px;
            height: 2px;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              top: -5px;
              left: 0px;
              background: $goldV2;
              width: 18px;
              height: 2px;
            }

            &::before {
              content: '';
              position: absolute;
              left: 0px;
              bottom: -4px;
              background: $gold;
              width: 18px;
              height: 2px;
            }
          }
        }
      }

      .header__wrapper__top__btn {
        display: none;
        @media (max-width: 1040px) {
          margin: auto 0;
          display: block;
        }
      }

      .header__wrapper__top__right {
        display: flex;
        align-items: center;
        height: 48px;
        gap: 48px;
        @media (max-width: 1040px) {
          display: none;
        }
        .header__wrapper__top__right__address {
          display: flex;
          align-items: center;
          width: 240px;
          gap: 16px;
          font-size: 20px;
          line-height: 24px;
        }

        .header__wrapper__top__right__social {
          display: flex;
          gap: 8px;

          > * {
            background: $goldV2;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
          }
        }

        .header__wrapper__top__right__mobile {
          font-size: 20px;
          line-height: 24px;
          display: flex;
          flex-direction: column;
          align-items: end;

          a {
            color: $gold;
            font-size: 15px;
          }
        }
      }
    }

    .header__wrapper__bottom {
      width: 83%;
      margin-bottom: 16px;
      @include text16;
      display: flex;
      justify-content: space-between;
      color: $black1;
      user-select: none;
      @media (max-width: 1040px) {
        display: none;
      }
      .header__nav-item {
        background: none;
        border: none;
        font: inherit;
        cursor: pointer;

        &.active {
          color: $goldV2;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 2px;
            background: $goldV2;
            bottom: -16px;
            left: -25%;
          }
        }
      }
    }
  }
}
</style>
