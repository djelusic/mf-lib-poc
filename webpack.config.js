const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  entry: {
    index: "./src/index.ts",
  },

  output: {
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf_lib_poc",
      filename: "remoteEntry.js",
      remotes: {
        "mf-lib-poc-remote": "mf_lib_poc@http://localhost:8081/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/components/Header.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
});
