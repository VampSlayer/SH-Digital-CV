<template>
  <div id="momentum" class="group">
    <div class="layer layer-base">
      <info-container
        :name="'Momentum Dash'"
        :year="'2019-2022'"
        :shape="'circle'"
        :number-of-slides="3"
      >
        <template v-slot:1>
          <div class="animated fadeIn momentum-text"><MomentumMarkdown /></div>
        </template>
        <template v-slot:2>
          <div>
            <a href="https://momentumdash.com/" target="_blank">
              <img
                v-if="slide === 1"
                class="momentum-pic mr-2 animated fadeIn"
                src="/pomodoro-timer.jpg"
              />
              <img
                v-if="slide === 2"
                class="momentum-pic mr-2 animated fadeIn"
                src="/fitbit-strava-metrics.jpg"
              />
              <img
                v-if="slide === 3"
                class="momentum-pic mr-2 animated fadeIn"
                src="/microsoft-to-do-integration.jpg"
              />
            </a>
            <dots
              class="dots m-0 mb-1"
              :slide="slide"
              :number-of-dots="3"
              :shape="'circle'"
              :dark="false"
              v-on:slide-change="slideChange"
            ></dots>
          </div>
        </template>
      </info-container>
    </div>
    <div class="layer layer-back">
      <div class="sh-center">
        <img class="momentum-logo mr-2" src="/momentum.png" />
      </div>
    </div>
  </div>
</template>

<script>
import MomentumMarkdown from "../assets/markdown/momentum-dash.md";
import InfoContainer from "./info-container.vue";
import Dots from "./dots.vue";

export default {
  name: "Momentum",
  components: {
    InfoContainer,
    Dots,
    MomentumMarkdown,
  },
  data() {
    return {
      slide: 1,
    };
  },
  methods: {
    slideChange(slide) {
      this.slide = slide;
    },
  },
};
</script>

<style scoped lang="scss">
#momentum {
  z-index: 4;

  .layer-back {
    background: white;
  }

  .momentum-logo {
    filter: invert(3%);
  }

  .momentum-pic {
    width: 120%;
    margin-left: -80px;
  }

  .momentum-text {
    font-size: 0.9em;
  }
}
</style>
