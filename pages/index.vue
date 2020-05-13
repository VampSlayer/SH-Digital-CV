<template>
  <div class="h-100">
    <!-- <div class="zero-page" v-if="!initialSequenceDone">
      <div class="title">
        <img
          class="animated fadeIn slower delay-half-s first-page-name m-auto"
          style="filter:invert(100%)"
          src="~/assets/sayamhussain.webp"
        />
      </div>
    </div> -->
    <div
      class="zero-page animated slideInDown slow"
      :class="{ 'first-page': initialSequenceDone }"
    >
      <div class="title">
        <img
          :class="{ invert: !initialSequenceDone }"
          class="first-page-name m-auto"
          src="~/assets/sayamhussain.webp"
        />
        <h3 class="animated fadeInUp slow delay-4s first-page-title mt-1">
          Full Stack Developer
        </h3>
      </div>
    </div>
    <div class="parallax">
      <!-- <div id="group1" class="parallax__group">
      <div class="parallax__layer parallax__layer--static">
        <div class="title animated fadeIn slower">
          <img class="first-page-name m-auto" src="~/assets/sayamhussain.png" />
          <h3 class="first-page-title m-0">Full Stack Developer</h3>
        </div>
      </div>
    </div> -->
      <div id="group2" class="parallax__group first-group">
        <div class="parallax__layer parallax__layer--base">
          <div class="title">About Me Bro</div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="title">
            <img class="first-page-name" src="~/assets/sayamhussain.png" />
          </div>
        </div>
      </div>
      <div id="group3" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="title">
            <img class="first-page-name" src="~/assets/sayamhussain.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import readingTime from "reading-time";
import TurndownService from "turndown";
export default {
  data() {
    return {
      initialSequenceDone: false,
      style: "third",
      length: "medium",
      mins: "",
      info: "<p>Me<a href='https://google.com'>Google</a></p>",
      mark: ""
    };
  },
  created() {
    const stats = readingTime(
      "Note that it's focused on performance and simplicity, so the number of words it will extract" +
        "from other formats than plain text can vary a little. But this is an estimation right?"
    );
    this.mins = stats.text;
    // for me markdown will probs look the same as plain text lol
    const turndownService = new TurndownService();
    this.mark = turndownService.turndown(this.info);
  },
  mounted() {
    setTimeout(() => {
      this.initialSequenceDone = true;
    }, 2000);
  }
};
</script>

<style>
body,
html {
  height: 100%;
}
* {
  font-family: "DM Mono", monospace;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}
#group1 {
  z-index: 5;
}
#group1 .parallax__layer--base {
  background: rgb(175, 175, 175);
}
#group2 {
  z-index: 3;
}
#group2 .parallax__layer--back {
  background: black;
}
#group3 {
  z-index: 3;
}
#group3 .parallax__layer--base {
  background: rgb(175, 175, 175);
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap");
</style>

<style>
.first-page-name {
  width: 47.5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.first-group {
  margin-top: 200vh;
}
.parallax {
  min-height: 100vh;
  perspective: 300px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 200%;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--static {
  transform: none;
  z-index: 1;
}
.parallax__layer--base {
  transform: translateZ(0);
  z-index: 4;
}
.parallax__layer--back {
  transform: translateZ(-300px) scale(2);
  z-index: 3;
}
.parallax__layer--deep {
  -webkit-transform: translateZ(-600px) scale(3);
  transform: translateZ(-600px) scale(3);
  z-index: 2;
}
.parallax__group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
}
/* .parallax__group {
  transform: translate3d(700px, 0, -800px) rotateY(30deg);
} */
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.first-page-title {
  color: #5d5d5d;
  text-align: center;
}
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
.animated.delay-half-s {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.invert {
  -moz-transition: background 1s ease-in;
  -o-transition: background 1s ease-in;
  -webkit-transition: background 1s ease-in;
  transition: background 1s ease-in;
  filter: invert(100%);
}
.first-page {
  -moz-transition: background 2s ease-in;
  -o-transition: background 2s ease-in;
  -webkit-transition: background 2s ease-in;
  transition: background 2s ease-in;
  background: #afafaf !important;
}
</style>
