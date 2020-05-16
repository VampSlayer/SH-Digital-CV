<template>
  <div id="credit-suisse" class="group">
    <div class="layer layer-base">
      <div class="sh-center">Credit Suisse</div>
    </div>
    <div class="layer layer-back">
      <img class="credit-suisse-logo mr-2" src="~/assets/credit.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditSuisse"
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
