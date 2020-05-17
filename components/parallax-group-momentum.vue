<template>
  <div id="momentum" class="group">
    <div class="layer layer-base">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 offset-3 text-center">
            <div
              class="title-center"
              :class="{ 'no-title-center': slide !== 1 }"
            >
              <h3 class="mt-0 mb-1">Momentum Dash</h3>
              <h6 class="year mt-1 mb-1">2019 -</h6>
              <dots
                class="dots m-0 mb-1"
                :slide="slide"
                :number-of-dots="3"
                v-on:slide-change="slideChange"
              ></dots>
              <div v-if="slide === 2" class="text animated fadeIn slow">
                <p>
                  Son agreed others exeter period myself few yet nature. Mention
                  mr manners opinion if garrets enabled. To an occasional
                  dissimilar impossible sentiments. Do fortune account written
                  prepare invited no passage. Garrets use ten you the weather
                  ferrars venture friends. Solid visit seems again you nor all.
                </p>
                <p>
                  Increasing impression interested expression he my at. Respect
                  invited request charmed me warrant to. Expect no pretty as do
                  though so genius afraid cousin. Girl when of ye snug poor
                  draw. Mistake totally of in chiefly. Justice visitor him
                  entered for. Continue delicate as unlocked entirely mr
                  relation diverted in. Known not end fully being style house.
                  An whom down kept lain name so at easy.
                </p>
                <p>
                  By impossible of in difficulty discovered celebrated ye.
                  Justice joy manners boy met resolve produce. Bed head loud
                  next plan rent had easy add him. As earnestly shameless
                  elsewhere defective estimable fulfilled of. Esteem my advice
                  it an excuse enable. Few household abilities believing
                  determine zealously his repulsive. To open draw dear be by
                  side like.
                </p>
              </div>
              <div v-if="slide === 3" class="animated fadeIn slow">
                <iframe
                  height="700vh"
                  width="100%"
                  src="https://momentumdash.com/"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layer layer-back">
      <div class="sh-center">
        <img class="momentum-logo mr-2" src="~/assets/momentum.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Dots from "./dots";

export default {
  name: "Momentum",
  components: {
    Dots
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
#momentum {
  z-index: 4;

  .layer-back {
    background: white;
  }

  .momentum-logo {
    filter: invert(3%);
  }

  .title-center {
    -webkit-transition-delay: 0.8s;
    transition-delay: 0.8s;
    -moz-transition: all 0.8s ease-in;
    -o-transition: all 0.8s ease-in;
    -webkit-transition: all 0.8s ease-in;
    transition: all 0.8s ease-in;
    margin-top: 50vh;

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
}
</style>
