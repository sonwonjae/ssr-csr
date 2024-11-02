const path = require("path");
const nodeExternals = require("webpack-node-externals");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST_PATH = path.resolve(__dirname, "dist");
const production = process.env.NODE_ENV === "production";
const development =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

/**
 *
 * @param {'web' | 'node'} target
 * @returns
 */
const getConfig = (target) => ({
    name: target,
    mode: development ? "development" : "production",
    target,
    entry: `./src/${target}/main.jsx`,
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        caller: { target },
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
        ],
    },
    optimization: {
        moduleIds: "named",
        chunkIds: "named",
    },
    externals:
        target === "node"
            ? ["@loadable/component", nodeExternals()]
            : undefined,
    output: {
        path: path.join(DIST_PATH, target),
        filename: production ? "[name].js" : "[name].js",
        publicPath: `/dist/${target}/`,
        libraryTarget: target === "node" ? "commonjs2" : undefined,
    },
    plugins: [new LoadablePlugin(), new MiniCssExtractPlugin()],
});

module.exports = [getConfig("web"), getConfig("node")];
