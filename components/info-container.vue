<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 offset-3 text-center">
        <div class="title-center" :class="{ 'no-title-center': slide !== 1 }">
          <h3 class="mt-0 mb-1">{{ name }}</h3>
          <h6 class="year mt-1 mb-1">{{ year }}</h6>
          <dots
            class="dots m-0 mb-1"
            :slide="slide"
            :number-of-dots="numberOfSlides"
            :shape="shape"
            :dark="dotsDark"
            v-on:slide-change="slideChange"
          ></dots>
          <div
            v-for="index in numberOfSlides - 1"
            :key="index"
            class="text animated fadeIn slow"
          >
            <slot v-if="slide === index + 1" :name="index"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dots from "./dots";

export default {
  name: "InfoContainer",
  components: {
    Dots
  },
  props: {
    numberOfSlides: {
      type: Number,
      default: 3
    },
    shape: { type: String, default: "circle" },
    dotsDark: { type: Boolean, default: false },
    name: { type: String, default: "" },
    year: { type: String, default: "" }
  },
  data() {
    return {
      slide: 1
    };
  },
  methods: {
    slideChange(slide) {
      this.slide = slide;
    }
  }
};
</script>

<style scoped lang="scss">
.title-center {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  -moz-transition: all 0.8s ease-in;
  -o-transition: all 0.8s ease-in;
  -webkit-transition: all 0.8s ease-in;
  transition: all 0.8s ease-in;
  margin-top: 45vh;

  .dots {
    font-size: 0.5em;
    -webkit-transition-delay: 0.8s;
    transition-delay: 0.8s;
    -moz-transition: all 0.8s ease-in;
    -o-transition: all 0.8s ease-in;
    -webkit-transition: all 0.8s ease-in;
    transition: all 0.8s ease-in;
  }
}

.no-title-center {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  -moz-transition: all 0.8s ease-in;
  -o-transition: all 0.8s ease-in;
  -webkit-transition: all 0.8s ease-in;
  transition: all 0.8s ease-in;
  margin-top: 10vh;

  .dots {
    font-size: 0.4em;
    -webkit-transition-delay: 0.8s;
    transition-delay: 0.8s;
    -moz-transition: all 0.8s ease-in;
    -o-transition: all 0.8s ease-in;
    -webkit-transition: all 0.8s ease-in;
    transition: all 0.8s ease-in;
  }
}

.text {
  font-size: 0.7em;
}

.year {
  color: #5d5d5d;
}
</style>
