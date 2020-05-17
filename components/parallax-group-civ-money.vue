<template>
  <div id="civ-money" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'CivMoney'"
        :shape="'square'"
        :number-of-slides="3"
        :dots-dark="true"
      >
        <template v-slot:1>
          <div v-html="civMoney"></div>
        </template>
        <template v-slot:2>
          <iframe
            height="700vh"
            width="100%"
            src="https://www.civmoney.com/#/login"
          ></iframe>
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
import CivMoney from "../assets/markdown/momentum-dash.md";
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
