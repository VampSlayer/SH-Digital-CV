<template>
  <div id="contact" class="group">
    <div id="contact-logos" class="layer layer-fore">
      <div class="sh-center logos">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sayam-hussain-52475210b/"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
        <a target="_blank" href="https://github.com/VampSlayer/CivMoney"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
        <a target="_blank" href="https://www.instagram.com/vampire_slayer69/"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1O2t9qWHM7pl6lRXHSK5-S0EwB3mrloft6gVDHM8DO_c/preview?usp=sharing"
          ><font-awesome-icon :icon="['fab', 'google']"
        /></a>
      </div>
      <div class="sh-footer">
        Sayam Hussain © {{ new Date().getFullYear() }}
      </div>
    </div>
    <div class="layer layer-base">
      <div class="sh-center">
        <logo class="sh-logo-override"></logo>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./logo";
export default {
  name: "Contact",
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
#contact {
  z-index: 3;

  .layer-base {
    background: #afafaf;
  }

  .logos {
    font-size: 4em;
    color: black;
  }

  a {
    color: black;
  }

  a:hover {
    color: white;
  }

  .sh-footer {
    position: absolute;
    left: 42%;
    top: 95%;
    font-size: 0.75em;
    color: #5d5d5d;
  }

  .sh-logo-override {
    filter: invert(40%);
  }
}
</style>
