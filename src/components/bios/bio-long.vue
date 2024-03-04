<template>
  <div class="animated fadeIn col-6 text-right bio bio-long">
    <div class="row">
      <div class="col-12">
        <p>
          Sayam graduated from the
          <a v-on:click="scrollTo('uol')" href="#">University of Liverpool</a>
          in 2015, with a Master’s of Physics, where modelling physical
          phenomena started his interest in programming. After he graduated he
          enrolled in the
          <a target="_blank" href="https://www.fdmgroup.com/">FDM</a> C#
          developer's program to build up his knowledge of object oriented
          programming, SQL, Unix and Web Development.
        </p>
        <p>
          At the end of the program, Sayam obtained a position as third level
          support at
          <a v-on:click="scrollTo('credit-suisse')" href="#">Credit Suisse</a>
          in Zurich, Switzerland. In third level support, Sayam troubleshooted
          and debugged many legacy systems, and provided users with lots of
          assistance. Gaining lots of knowledge and improving his C# knowledge
          and skills, he moved to Junior developer after the first year, where
          he worked on a number of green fields projects.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-2">
        <p>
          After two years at
          <a v-on:click="scrollTo('credit-suisse')" href="#">Credit Suisse</a>,
          Sayam wished to move back home to Manchester. There he found a
          developer position at
          <a v-on:click="scrollTo('interact')" href="#">Interact Software</a>,
          an Intranet maker. Here he worked and led on two greenfield projects,
          one to build third party integrations into the current legacy system
          and the other was an employee pulse surveying tool.
        </p>
        <p>
          Wanting to travel, and see different parts of the world, Sayam moved
          to Canada and obtained a developer role at
          <a v-on:click="scrollTo('momentum')" href="#">Momentum Dash</a>, the
          most popular new tab extension for Google Chrome. At Momentum he is
          improving his data visualization, design and front end skills and
          learning more about web applications at scale.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-4">
        <p>
          Some of Sayam’s activities include yoga, playing
          <a
            target="_blank"
            href="https://na.leagueoflegends.com/en-us/how-to-play/"
            >League of Legends</a
          >, reading and swimming. Sayam especially likes to practice Yoga in
          the morning to help start his day. He finds it gives him the energy
          and allows him to start his day with a relaxed mind. In playing League
          of Legends online he joins up with other players in an effort to take
          objectives, this requires a lot of teamwork and coordination. Sayam
          will go swimming often having found a love for it while living in
          Zurich and swimming often in the city’s lake.
        </p>
        <p>
          Sayam holds his passion for science and hopes one day to go back to
          academia. People who know Sayam would say he is a kind, generous and
          interesting person who loves a challenge and new experiences.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BioLong",
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bio-long {
  font-size: 0.48em;
}
</style>
