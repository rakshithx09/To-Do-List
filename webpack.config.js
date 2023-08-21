const path = require("path");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
    mode: "development",
    target:"web",
    plugins: [
        new NodePolyfillPlugin()
    ],
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

};