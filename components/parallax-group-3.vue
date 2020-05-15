<template>
  <div id="group-3" class="group">
    <div class="layer layer-fore">
      <div class="sh-center logos">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <font-awesome-icon :icon="['fab', 'github']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'google']" />
      </div>
    </div>
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

<style scoped lang="scss">
#group-3 {
  z-index: 4;

  .layer-base {
    background: #afafaf;
  }

  .logos {
    font-size: 4em;
    color: black;
  }
}
</style>
