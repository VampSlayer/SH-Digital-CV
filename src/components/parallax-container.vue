<template>
  <div id="parallax-container" class="parallax" :class="{ debug: debug }">
    <footer class="parallax-header">
      <div class="container-fluid">
        <div class="row animated fadeInUp slow delay-1s zero-page-title mt-1">
          <div class="col-2 text-left">
            <a href="#" v-on:click="debug = !debug"
              ><h4>{{ debug ? "Hide" : "Show" }} Parallax</h4></a
            >
          </div>
          <div class="col-1 offset-9 text-right">
            <a v-on:click="scrollTo" href="#"><h4>Contact</h4></a>
          </div>
        </div>
      </div>
    </footer>
    <parallax-group-about></parallax-group-about>
    <parallax-group-momentum></parallax-group-momentum>
    <parallax-group-civ-money></parallax-group-civ-money>
    <parallax-group-interact></parallax-group-interact>
    <parallax-group-credit-suisse></parallax-group-credit-suisse>
    <parallax-group-uol></parallax-group-uol>
    <parallax-group-contact></parallax-group-contact>
  </div>
</template>

<script>
import ParallaxGroupAbout from "./parallax-group-about.vue";
import ParallaxGroupMomentum from "./parallax-group-momentum.vue";
import ParallaxGroupCivMoney from "./parallax-group-civ-money.vue";
import ParallaxGroupInteract from "./parallax-group-interact.vue";
import ParallaxGroupCreditSuisse from "./parallax-group-credit-suisse.vue";
import ParallaxGroupUol from "./parallax-group-uol.vue";
import ParallaxGroupContact from "./parallax-group-contact.vue";

export default {
  name: "ParallaxContainer",
  components: {
    ParallaxGroupAbout,
    ParallaxGroupMomentum,
    ParallaxGroupCivMoney,
    ParallaxGroupInteract,
    ParallaxGroupCreditSuisse,
    ParallaxGroupUol,
    ParallaxGroupContact,
  },
  data() {
    return {
      debug: false,
    };
  },
  methods: {
    scrollTo() {
      const element = document.getElementById("contact");
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.parallax-header {
  position: absolute;
  bottom: 0;
  width: 100%;

  a {
    color: #5d5d5d;
  }

  a:hover {
    color: white;
  }
}
</style>
