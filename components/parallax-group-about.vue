<template>
  <div id="about" class="group">
    <div class="layer layer-base">
      <div class="container-fluid">
        <div class="row mr-2">
          <!-- <div class="col text-left mt-4 pl-5">Navigation</div> -->
          <div class="col-2 offset-10 mt-4 text-right sh-pointer">
            <span v-on:click="toggleBioLength"
              ><span class="tldr">click tl;dr</span> About</span
            >
          </div>
        </div>
        <div class="row ml-1 mr-2">
          <div class="col-6">
            <div class="row">
              <div class="col">
                <a href="#" v-on:click="scrollTo('uol', 3000)">
                  <blockquote class="blockquote text-left">
                    <p class="m-0 time-line-year">
                      2015
                    </p>
                    <footer class="blockquote-footer time-line-title">
                      <img
                        class="logo uol mr-1"
                        src="~/assets/uol.png"
                      />University of Liverpool, MPhys
                    </footer>
                  </blockquote>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col offset-2">
                <a href="#" v-on:click="scrollTo('credit-suisse', 2500)">
                  <blockquote class="blockquote text-left">
                    <p class="m-0 time-line-year">
                      2015-2017
                    </p>
                    <footer class="blockquote-footer time-line-title">
                      <img class="logo mr-2" src="~/assets/credit.png" />Credit
                      Suisse
                    </footer>
                  </blockquote>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col offset-4">
                <a href="#" v-on:click="scrollTo('interact', 2000)">
                  <blockquote class="blockquote text-left">
                    <p class="m-0 time-line-year">
                      2018-2019
                    </p>
                    <footer class="blockquote-footer time-line-title">
                      <img
                        class="logo mr-1"
                        src="~/assets/interact.png"
                      />Interact Software
                    </footer>
                  </blockquote>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col offset-6">
                <a href="#" v-on:click="scrollTo('momentum', 1000)">
                  <blockquote class="blockquote text-left">
                    <p class="m-0 time-line-year">
                      2019-
                    </p>
                    <footer class="blockquote-footer time-line-title">
                      <img
                        class="logo mr-2"
                        src="~/assets/momentum.png"
                      />Momentum Dash
                    </footer>
                  </blockquote>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col offset-8">
                <a href="#" v-on:click="scrollTo('civ-money', 1500)">
                  <blockquote class="blockquote text-left">
                    <footer class="blockquote-footer time-line-title">
                      <img
                        class="civ-money-logo mr-2"
                        src="~/assets/civ-money.png"
                      />CivMoney
                    </footer>
                  </blockquote>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col offset-9">
                <a href="#" v-on:click="scrollTo('contact', 3500)">
                  <blockquote class="blockquote text-left">
                    <footer class="blockquote time-line-title">
                      Contact Sayam
                    </footer>
                  </blockquote>
                </a>
              </div>
            </div>
          </div>
          <bio-long v-if="bio === 'long'"></bio-long>
          <bio-medium v-if="bio === 'medium'"></bio-medium>
          <bio-short v-if="bio === 'short'"></bio-short>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BioLong from "./bios/bio-long";
import BioMedium from "./bios/bio-medium";
import BioShort from "./bios/bio-short";

export default {
  name: "About",
  components: {
    BioLong,
    BioMedium,
    BioShort
  },
  data() {
    return {
      bio: "long"
    };
  },
  methods: {
    scrollTo(element, speed) {
      this.$scrollTo(`#${element}`, speed, {
        easing: "ease",
        container: "#parallax-container"
      });
    },
    toggleBioLength() {
      debugger;
      const lengths = ["long", "medium", "short"];
      let currentLengthIndex = lengths.findIndex((x) => x === this.bio);
      if (currentLengthIndex === 2) {
        currentLengthIndex = 0;
      } else {
        currentLengthIndex += 1;
      }
      this.bio = lengths[currentLengthIndex];
    }
  }
};
</script>

<style scoped lang="scss">
#about {
  margin-top: 100vh;
  z-index: 5;

  .layer-base {
    background: black;
    color: white;
  }

  .time-line-year {
    font-size: 1.5em;
  }

  .time-line-title {
    font-size: 1em;
  }

  .blockquote-footer:before {
    content: none;
  }

  .logo {
    width: 7%;
    filter: brightness(0) invert(1);
  }
  .uol {
    width: 5%;
  }
  .civ-money-logo {
    width: 13%;
  }
  .blockquote {
    cursor: pointer;
  }
  a {
    color: inherit !important;
  }
  .tldr {
    font-size: 0.4em;
  }
}
</style>
