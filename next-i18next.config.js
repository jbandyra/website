const path = require("path");
const { i18n } = require("./next.config");

module.exports = {
  i18n,
  localePath: path.resolve("./locales"),
  reloadOnPrerender: true,
};
