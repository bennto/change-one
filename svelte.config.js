import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "./src/stylesheets/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
