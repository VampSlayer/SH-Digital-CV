<template>
  <img
    :class="{ invert: invert }"
    class="logo"
    src="/sayamhussain.webp"
  />
</template>

<script>
export default {
  name: "Logo",
  props: {
    invert: Boolean
  }
};
</script>

<style scoped>
.invert {
  filter: invert(100%);
}
.logo {
  width: 47.5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
