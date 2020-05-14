<template>
  <div id="group-2" class="group">
    <div class="layer layer-base">
      <div class="sh-center">Momentum Dash</div>
    </div>
    <div class="layer layer-back">
      <div class="sh-center">
        <logo></logo>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./logo";
export default {
  name: "ParallaxGroup2",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
#group-2 {
  z-index: 3;

  .layer-back {
    background: white;
  }
}
</style>
