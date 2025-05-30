<template>
  <div class="footer__wrapper">
    <div class="footer__limiter">
      <div class="footer__wrapper__left">
        <div>
          <a href="/">
            <img
              width="109"
              height="56"
              src="@/assets/image/Logo_hotel_white.svg"
              alt="Hotel Stavropol Logo"
            />
          </a>
        </div>
      </div>
      <h4>© Hotel Stavropol, 2020</h4>
      <div class="footer__wrapper__right">
        <h2>Мы в соц. сетях</h2>
        <div class="footer__wrapper__right__social-network">
          <a href="/"><img width="24" height="24" src="@/assets/image/Tg.svg" alt="Telegram" /> </a>
          <a href="/"
            ><img width="24" height="24" src="@/assets/image/Whatsapp.svg" alt="Telegram" />
          </a>
          <a href="/"><img width="24" height="24" src="@/assets/image/Tg.svg" alt="Telegram" /> </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer__wrapper {
  margin-top: 60px;
  background: $footerBtn;
  border-radius: 20px 20px 0px 0px;
  .footer__limiter {
    max-width: 1660px;
    padding: 0 36px;
    margin: 0 auto;
    height: 213px;
    display: flex;
    justify-content: space-between;
    color: white;
    position: relative;
    @media (max-width: 540px) {
      flex-direction: column;
      height: 328px;
    }
    h4 {
      position: absolute;
      bottom: 10px;
    }
    .footer__wrapper__left {
      @include text14;
      margin-top: 60px;
      @media (max-width: 540px) {
        margin-top: 40px;
      }
    }
    .footer__wrapper__right {
      display: flex;
      flex-direction: column;
      gap: 20px;
      @include text20;
      margin: auto 0;
      @media (max-width: 540px) {
        margin-top: 40px;
      }
      .footer__wrapper__right__social-network {
        display: flex;
        gap: 20px;
      }
      .footer__wrapper__right__social-network > * {
        display: flex;
        justify-content: center;
        align-items: center;
        background: $gray;
        border-radius: 16px;
        width: 52px;
        height: 52px;
      }
    }
  }
}
</style>
