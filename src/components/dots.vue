<template>
  <p class="dots-light" :class="{ 'dots-dark': dark }">
    <a
      v-for="index in numberOfDots"
      :key="index"
      class="mr-1"
      href="#"
      :class="{ active: slide === index }"
      v-on:click="$emit('slide-change', index)"
      ><font-awesome-icon :icon="['fas', shape]" />
    </a>
  </p>
</template>

<script>
export default {
  name: "Dots",
  props: {
    numberOfDots: {
      type: Number,
      default: 3
    },
    slide: {
      type: Number,
      default: 1
    },
    dark: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "circle"
    }
  }
};
</script>

<style scoped lang="scss">
.dots-light {
  .active {
    color: #5d5d5d;
  }

  a {
    color: #afafaf;
  }

  a:hover {
    color: black;
  }
}

.dots-dark {
  .active {
    color: #ffffff;
  }

  a {
    color: #bdbdbd;
  }

  a:hover {
    color: rgb(58, 58, 58);
  }
}
</style>
