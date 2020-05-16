<template>
  <div id="civ-money" class="group">
    <div class="layer layer-base">
      <div class="sh-center">CivMoney</div>
    </div>
    <div class="layer layer-back">
      <div>
        <img class="civ-money-logo mr-2" src="~/assets/civ-money.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CivMoney"
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
