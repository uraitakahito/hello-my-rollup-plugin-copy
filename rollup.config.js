import copy from "@uraitakahito/rollup-plugin-copy";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    copy({
      targets: [
        { src: "src/index.html", dest: "dist" },
        { src: "src/image/**/*", dest: "dist/image" },
      ],
      verbose: true,
      watchTargets: true,
    }),
  ],
};
