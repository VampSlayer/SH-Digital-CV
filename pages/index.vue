<template>
  <div class="h-100">
    <zero-page v-on:sequences-done="sequencesDone = true"></zero-page>
    <parallax-container v-if="sequencesDone"></parallax-container>
  </div>
</template>

<script>
import ZeroPage from "../components/zero-page";
import ParallaxContainer from "../components/parallax-container";
export default {
  name: "Index",
  components: {
    ZeroPage,
    ParallaxContainer
  },
  data() {
    return {
      sequencesDone: false
    };
  }
};
</script>
