<template>
  <div id="uol" class="group">
    <div class="layer layer-base">
      <div class="sh-center text-center">
        <p>University of Liverpool</p>
        <p>Master's of Physics</p>
      </div>
    </div>
    <div class="layer layer-back">
      <img class="uol-logo mr-2" src="~/assets/uol-3.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Uol"
};
</script>

<style scoped lang="scss">
#uol {
  margin-top: 100vh;
  z-index: 2;

  .layer-back {
    background: white;
  }

  .uol-logo {
    width: 18%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    filter: brightness(0) invert(95%);
  }
}
</style>
