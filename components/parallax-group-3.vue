<template>
  <div id="group-3" class="group">
    <div class="layer layer-base">
      <div class="sh-center">
        <logo></logo>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./logo";
export default {
  name: "ParallaxGroup3",
  components: {
    Logo
  }
};
</script>

<style scoped>
#group-3 {
  z-index: 3;
}
#group-3 .layer-base {
  background: #afafaf;
}
</style>
