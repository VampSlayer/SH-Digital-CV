<template>
  <div id="about-me" class="group">
    <div class="layer layer-base">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 offset-10 text-right mt-4 pr-5">About Me</div>
        </div>
        <div class="row ml-1 mr-2">
          <div class="col-6">
            <div class="row">
              <div class="col">
                <blockquote class="blockquote text-left">
                  <p class="m-0 time-line-year">
                    2015
                  </p>
                  <footer class="blockquote-footer time-line-title">
                    <img class="logo uol" src="~/assets/uol.png" />University of
                    Liverpool, MPhys
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="row">
              <div class="col offset-2">
                <blockquote class="blockquote text-left">
                  <p class="m-0 time-line-year">
                    2015-2017
                  </p>
                  <footer class="blockquote-footer time-line-title">
                    <img class="logo mr-1" src="~/assets/credit.png" />Credit
                    Suisse
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="row">
              <div class="col offset-4">
                <blockquote class="blockquote text-left">
                  <p class="m-0 time-line-year">
                    2018-2019
                  </p>
                  <footer class="blockquote-footer time-line-title">
                    <img class="logo" src="~/assets/interact.png" />Interact
                    Software
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="row">
              <div class="col offset-6">
                <blockquote class="blockquote text-left">
                  <p class="m-0 time-line-year">
                    2019-
                  </p>
                  <footer class="blockquote-footer time-line-title">
                    <img
                      class="logo mr-1"
                      src="~/assets/momentum.png"
                    />Momentum Dash
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col text-right bio">
                <p>
                  From they fine john he give of rich he. They age and draw mrs
                  like. Improving end distrusts may instantly was household
                  applauded incommode. Why kept very ever home mrs. Considered
                  sympathize ten uncommonly occasional assistance sufficient
                  not. Letter of on become he tended active enable to. Vicinity
                  relation sensible sociable surprise screened no up as.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-10 offset-2 text-right bio">
                <p>
                  From they fine john he give of rich he. They age and draw mrs
                  like. Improving end distrusts may instantly was household
                  applauded incommode. Why kept very ever home mrs.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-8 offset-4 text-right bio">
                <p>
                  From they fine john he give of rich he. They age and draw mrs
                  like. Improving end distrusts may instantly was household
                  applauded incommode. Why kept very ever home mrs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#about-me {
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

  .bio {
    font-size: 0.8em;
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
}
</style>
