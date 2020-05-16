<template>
  <div id="interact" class="group">
    <div class="layer layer-base">
      <div class="sh-center">Interact Software</div>
    </div>
    <div class="layer layer-back">
      <img class="interact-logo mr-2" src="~/assets/interact.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Interact"
};
</script>

<style scoped lang="scss">
#interact {
  margin-top: 100vh;
  z-index: 3;

  .layer-back {
    background: white;
  }

  .interact-logo {
    width: 20%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    filter: brightness(0) invert(95%);
  }
}
</style>
