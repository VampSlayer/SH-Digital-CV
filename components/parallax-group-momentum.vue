<template>
  <div id="momentum" class="group">
    <div class="layer layer-base">
      <div class="sh-center">Momentum Dash</div>
    </div>
    <div class="layer layer-back">
      <div class="sh-center">
        <img class="momentum-logo mr-2" src="~/assets/momentum.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Momentum"
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
