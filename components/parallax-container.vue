<template>
  <div class="parallax">
    <parallax-group-1></parallax-group-1>
    <parallax-group-2></parallax-group-2>
    <parallax-group-3></parallax-group-3>
  </div>
</template>

<script>
import ParallaxGroup1 from "./parallax-group-1";
import ParallaxGroup2 from "./parallax-group-2";
import ParallaxGroup3 from "./parallax-group-3";

export default {
  name: "ParallaxContainer",
  components: {
    ParallaxGroup1,
    ParallaxGroup2,
    ParallaxGroup3
  }
};
</script>
