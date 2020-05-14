<template>
  <div
    class="zero-page animated slideInDown slow"
    :class="{ 'first-sequence-done': firstSequenceDone }"
  >
    <div class="sh-center">
      <logo :invert="true" :class="{ 'no-invert': secondSequenceDone }"></logo>
      <h3 class="animated fadeInUp slow delay-4s zero-page-title mt-1">
        Full Stack Developer
      </h3>
    </div>
  </div>
</template>

<script>
import Logo from "./logo";
export default {
  name: "ZeroPage",
  components: {
    Logo
  },
  data() {
    return {
      firstSequenceDone: false,
      secondSequenceDone: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.firstSequenceDone = true;
    }, 3000);
    setTimeout(() => {
      this.secondSequenceDone = true;
      this.$emit("sequences-done");
    }, 2000);
  }
};
</script>

<style>
.zero-page {
  min-height: 100vh;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
}

.zero-page-title {
  color: #5d5d5d;
  text-align: center;
}

.no-invert {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -moz-transition: all 1s ease-in;
  -o-transition: all 1s ease-in;
  -webkit-transition: all 1s ease-in;
  transition: all 1s ease-in;
  filter: invert(0%) !important;
}
.first-sequence-done {
  -moz-transition: background 1s ease-in;
  -o-transition: background 1s ease-in;
  -webkit-transition: background 1s ease-in;
  transition: background 1s ease-in;
  background: #afafaf !important;
}
</style>
