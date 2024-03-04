<template>
  <div id="interact" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'Interact Software'"
        :year="'2017-2019'"
        :shape="'th-large'"
        :number-of-slides="4"
      >
        <template v-slot:1>
          <div class="animated fadeIn"><InteractMarkdown /></div>
        </template>
        <template v-slot:2>
          <iframe
            class="animated fadeIn slower"
            height="700vh"
            width="100%"
            src="https://www.interact-intranet.com/features/integrations/"
          ></iframe>
        </template>
        <template v-slot:3>
          <iframe
            class="animated fadeIn slower"
            height="700vh"
            width="100%"
            src="https://www.interact-intranet.com/features/pulse-surveys/"
          ></iframe>
        </template>
      </info-container>
    </div>
    <div class="layer layer-back">
      <img class="interact-logo mr-2" src="/interact.png" />
    </div>
  </div>
</template>

<script>
import InteractMarkdown from "../assets/markdown/interact.md";
import InfoContainer from "./info-container.vue";

export default {
  name: "Interact",
  components: {
    InfoContainer,
    InteractMarkdown,
  },
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
