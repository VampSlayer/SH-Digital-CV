<template>
  <div id="momentum" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'Momentum Dash'"
        :year="'2019 -'"
        :shape="'circle'"
        :number-of-slides="3"
      >
        <template v-slot:1>
          <div v-html="momentum"></div>
        </template>
        <template v-slot:2>
          <iframe
            height="700vh"
            width="100%"
            src="https://momentumdash.com/"
          ></iframe>
        </template>
      </info-container>
    </div>
    <div class="layer layer-back">
      <div class="sh-center">
        <img class="momentum-logo mr-2" src="~/assets/momentum.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Momentum from "../assets/markdown/momentum-dash.md";
import InfoContainer from "./info-container";

export default {
  name: "Momentum",
  components: {
    InfoContainer
  },
  computed: {
    momentum() {
      return Momentum;
    }
  }
};
</script>

<style scoped lang="scss">
#momentum {
  z-index: 4;

  .layer-back {
    background: white;
  }

  .momentum-logo {
    filter: invert(3%);
  }
}
</style>
