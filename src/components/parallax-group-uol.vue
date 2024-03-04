<template>
  <div id="uol" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'University of Liverpool'"
        :year="'2011-2015'"
        :shape="'university'"
        :number-of-slides="3"
      >
        <template v-slot:1>
          <div class="animated fadeIn"><UolMarkdown /></div>
        </template>
        <template v-slot:2>
          <figure class="animated fadeIn">
            <img
              class="uol-poster sh-pointer"
              :class="{ 'uol-poster-zoom': zoomPoster }"
              src="/uol-poster.webp"
              v-on:click="zoomPoster = !zoomPoster"
            />
            <figcaption class="uol-poster-caption">
              Master's Project Poster
            </figcaption>
          </figure>
        </template>
      </info-container>
    </div>
    <div class="layer layer-back">
      <img class="uol-logo mr-2" src="/uol-3.png" />
    </div>
  </div>
</template>

<script>
import UolMarkdown from "../assets/markdown/uol.md";
import InfoContainer from "./info-container.vue";

export default {
  name: "Uol",
  components: {
    InfoContainer,
    UolMarkdown,
  },
  data() {
    return {
      zoomPoster: false,
    };
  },
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

  .uol-poster {
    border: 1px solid black;
    -moz-transition: all 0.8s ease-in;
    -o-transition: all 0.8s ease-in;
    -webkit-transition: all 0.8s ease-in;
    transition: all 0.8s ease-in;
    width: 60%;
  }

  .uol-poster-zoom {
    -moz-transition: all 0.8s ease-in;
    -o-transition: all 0.8s ease-in;
    -webkit-transition: all 0.8s ease-in;
    transition: all 0.8s ease-in;
    transform: scale(
      1.5
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  .uol-poster-caption {
    font-size: 0.75em;
  }
}
</style>
