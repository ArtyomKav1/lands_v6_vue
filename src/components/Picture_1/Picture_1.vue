<script setup lang="ts"></script>

<template>
  <div class="picture1__wrapper">
    <div class="picture1__container">
      <img class="picture1__container__light" src="@/assets/image/light.svg" alt="" />
      <div class="picture1__container__text">
        <h1>Секрет успешной свадьбы – в спокойных и счастливых молодых</h1>
        <p>
          Мы сделаем все, чтобы вы чувствовали себя комфортно на собственной свадьбе, а гости
          вспоминали ее самым вкусными и веселым событием в жизни!
        </p>
      </div>
      <div class="picture1__container__images">
        <img class="picture1__container__pigeon_1" src="@/assets/image/Pigeon_1.png" alt="pigeon" />
        <img class="picture1__container__pigeon_2" src="@/assets/image/Pigeon_2.png" alt="pigeon" />
        <img class="picture1__container__rings" src="@/assets/image/Rings.png" alt="rings" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.picture1__wrapper {
  max-width: 1620px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 20px;
  @media (max-width: 1180px) {
    margin-top: 60px;
  }
}

.picture1__container {
  width: 100%;
  min-height: 288px;
  background: $customGray;
  border-radius: 16px;
  display: flex;
  gap: 60px;
  position: relative;
  .picture1__container__light {
    position: absolute;
    left: 0;
    border-radius: 16px 0px 0px 0px;
    @media (max-width: 700px) {
      bottom: 0;
      transform: rotatex(180deg);
    }
  }

  .picture1__container__text {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    max-width: 784px;
    padding: 48px 0 64px 80px;
    gap: 24px;
    z-index: 4;

    h1 {
      color: $goldV2;
      @include text40;
      font-weight: bold;
    }

    p {
      color: $footerBtn;
      @include text16;
    }
  }

  .picture1__container__images {
    position: relative;
    width: 100%;
    height: 100%;
    flex-grow: 1;

    .picture1__container__pigeon_1 {
      position: absolute;
      top: -45px;
      left: 0;
      z-index: 3;
      width: auto;
      height: auto;
      max-width: 100%;
    }

    .picture1__container__pigeon_2 {
      position: absolute;
      top: 15px;
      left: 550px;
      z-index: 3;
      width: auto;
      height: auto;
      max-width: 100%;
    }

    .picture1__container__rings {
      position: absolute;
      top: 48px;
      left: 160px;
      z-index: 2;
      width: auto;
      height: auto;
      max-width: 100%;
    }
  }
}

@media (max-width: 1660px) {
  .picture1__container {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .picture1__container__text {
      padding: 48px 40px;
      max-width: 100%;
      text-align: start;
    }

    .picture1__container__images {
      height: 300px;
      .picture1__container__pigeon_1 {
        top: 0px;
        left: 30%;
        transform: translateX(-200px);
      }

      .picture1__container__pigeon_2 {
        top: 45px;
        left: 60%;
        transform: translateX(100px);
      }

      .picture1__container__rings {
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

@media (max-width: 900px) {
  .picture1__container {
    .picture1__container__images {
      height: 250px;

      .picture1__container__pigeon_1 {
        width: 106px;
        height: 139px;
        top: 80px;
        transform: translateX(-80px);
      }

      .picture1__container__pigeon_2 {
        width: 156px;
        height: 128px;
        top: 85px;
        transform: translateX(50px);
      }

      .picture1__container__rings {
        width: 328px;
        height: 163px;
        top: 85px;
      }
    }
  }
}

@media (max-width: 600px) {
  .picture1__container {
    gap: 0px;
    .picture1__container__text {
      gap: 8px;
      h1 {
        @include text20;
      }
      p {
        @include text14;
      }
    }
    .picture1__container__images {
      height: 200px;
      overflow: hidden;
      .picture1__container__pigeon_1 {
        width: 80px;
        height: auto;
        top: 90px;
        // transform: translateX(-150px);
      }

      .picture1__container__pigeon_2 {
        width: 120px;
        height: auto;
        top: 70px;
      }

      .picture1__container__rings {
        width: 250px;
        height: auto;
        top: 100px;
      }
    }
  }
}
</style>
