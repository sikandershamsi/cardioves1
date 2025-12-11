const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./pages/*.js",
      "./pages/**/*.js",
      "./components/*.js",
      "./components/**/*.js",
    ],
    whitelistPatterns: [/^slick-/],
    // defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "tailwindcss/nesting",
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
     
  ],
};
