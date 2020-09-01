const precss = require("precss");
const autoprefixer = require("autoprefixer");
const psmq = require("postcss-sort-media-queries");

module.exports = {
  plugins: [precss, psmq, autoprefixer]
};
