module.exports = {
  entry: ['babel-polyfill', "./client/src/index.jsx"],
  mode: "development",
  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        // options: {presets: ["@babel/preset-env", "@babel/preset-react"], plugins: ["@babel/plugin-transform-runtime"]}
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}