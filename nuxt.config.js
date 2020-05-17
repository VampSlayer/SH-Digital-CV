module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Sayam Hussain",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "animate.css",
    "~/assets/style.scss",
    "~/assets/parallax.scss",
    "~/assets/dm-mono.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://vue-scrollto.netlify.app/docs/#nuxt-js
    ["vue-scrollto/nuxt", { container: "#parallax-container" }],
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    "@nuxtjs/markdownit",
    // Doc: https://github.com/vaso2/nuxt-fontawesome#readme
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
