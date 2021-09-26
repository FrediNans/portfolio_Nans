export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "portfolio",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "nuxt-compress"
  ],
  "nuxt-compress": {
    gzip: {
      threshold: 8192
    },
    brotli: {
      threshold: 8192
    }
  },
  bootstrapVue: {
    icons: true,
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  styleResources: {
    scss: ["@/assets/scss/_variables.scss", "@/assets/scss/_mixins.scss"]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  }
};
