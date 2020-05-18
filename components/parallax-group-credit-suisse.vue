<template>
  <div id="credit-suisse" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'Credit Suisse'"
        :year="'2015-2017'"
        :shape="'money-bill'"
        :number-of-slides="3"
        :dots-dark="true"
      >
        <template v-slot:1>
          <div class="animated fadeIn" v-html="creditSuisse"></div>
        </template>
        <template v-slot:2>
          <iframe
            class="animated fadeIn slower"
            height="700vh"
            width="100%"
            src="https://derivative.credit-suisse.com/ch/ch/en/"
          ></iframe>
        </template>
      </info-container>
    </div>
    <div class="layer layer-back">
      <img class="credit-suisse-logo mr-2" src="~/assets/credit.png" />
    </div>
  </div>
</template>

<script>
import CreditSuisse from "../assets/markdown/credit-suisse.md";
import InfoContainer from "./info-container";

export default {
  name: "CreditSuisse",
  components: {
    InfoContainer
  },
  computed: {
    creditSuisse() {
      return CreditSuisse;
    }
  }
};
</script>

<style scoped lang="scss">
#credit-suisse {
  color: white;
  margin-top: 100vh;
  z-index: 2;

  .layer-back {
    background: black;
  }

  .credit-suisse-logo {
    filter: brightness(0) invert(15%);
    width: 31%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
