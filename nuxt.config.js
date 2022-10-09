export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  /*
   ** Headers of the page
   */
  head: {
    title: "app",
    title: "Production reports",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css",
      },
    ],
    bodyAttrs: {
      class: "", // Add `white-content` class here to enable "white" mode.
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  router: {
    linkExactActiveClass: "active",
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "assets/css/demo.css",
    "assets/css/nucleo-icons.css",
    "assets/sass/black-dashboard-pro.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    `~/plugins/dashboard-plugin.js`,
    { src: "~/plugins/full-calendar.js", ssr: false },
    { src: "~/plugins/world-map.js", ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  //autoimport
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
      extensions: ["vue", "jsx"],
      pattern: `**/*.{vue,js,ts}`,
      ignore: ["~/components/index.ts"],
    },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  // Modules (https://go.nuxtjs.dev/config-modules)
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "nuxt-highcharts",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.AXIOS_BASE_URL,
  },
  env:{
    mqtt_prefix: process.env.MQTT_PREFIX,
    mqtt_host: process.env.MQTT_HOST,
    mqtt_port: process.env.MQTT_PORT
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
  },
};
