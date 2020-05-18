<template>
  <div id="civ-money" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'CivMoney'"
        :shape="'square-full'"
        :number-of-slides="3"
        :dots-dark="true"
      >
        <template v-slot:1>
          <div class="animated fadeIn" v-html="civMoney"></div>
        </template>
        <template v-slot:2>
          <a
            class="animated fadeIn"
            target="_blank"
            href="https://www.civmoney.com/"
          >
            <video height="640vh" width="100%" autoplay loop>
              <source src="~/assets/civ-money.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        </template>
      </info-container>
    </div>
    <div class="layer layer-back">
      <div>
        <img class="civ-money-logo mr-2" src="~/assets/civ-money.png" />
      </div>
    </div>
  </div>
</template>

<script>
import CivMoney from "../assets/markdown/civ-money.md";
import InfoContainer from "./info-container";

export default {
  name: "CivMoney",
  components: {
    InfoContainer
  },
  computed: {
    civMoney() {
      return CivMoney;
    }
  }
};
</script>

<style scoped lang="scss">
#civ-money {
  color: white;
  margin-top: 100vh;
  z-index: 2;

  .layer-back {
    background: black;
  }

  .civ-money-logo {
    filter: invert(99%);
    width: 31%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
