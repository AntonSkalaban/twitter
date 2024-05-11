import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const babelPlugins = [];

if (process.env.MIGHTYMELD) {
  babelPlugins.push("@mightymeld/runtime/babel-plugin-mightymeld");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: babelPlugins,
      },
    }),
    svgr({ include: "**/*.svg?react" }),
  ],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      styled: "/src/styled",
      hooks: "/src/hooks",
      api: "/src/api",
      hoc: "/src/hoc",
      helpers: "/src/helpers",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
      constants: "/src/constants",
    },
  },
});
