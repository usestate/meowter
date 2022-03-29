const path = require("path");
const CracoLinariaPlugin = require('craco-linaria')

const createAliases = (modules) =>
  modules.reduce(
    (aliases, module) => ({
      ...aliases,
      [`@${module}`]: path.resolve(__dirname, `src/${module}`),
    }),
    {}
  );

module.exports = {
  plugins: [
    {
      plugin: CracoLinariaPlugin,
      options: {
        displayName: true,
        rules: [
          {
            action: require("@linaria/shaker").default,
          },
          {
            test: /\/node_modules\//,
            action: 'ignore',
          },
        ],
      },
    },
  ],
  webpack: {
    alias: createAliases(["ui", "features", "screens", "lib"]),
  },
};
