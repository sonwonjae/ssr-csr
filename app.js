const path = require("path");
const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { ChunkExtractor } = require("@loadable/server");
const compression = require("compression");

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use("/dist", express.static(path.join(__dirname, "dist")));

const sleep = async (time = 3000) => {
    return await new Promise((res) => {
        setTimeout(() => {
            res();
        }, time);
    });
};

if (process.env.NODE_ENV !== "production") {
    const { default: webpackConfig } = require("./webpack.config");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpack = require("webpack");
    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            logLevel: "silent",
            publicPath: "/dist/web",
            writeToDisk(filePath) {
                return (
                    /dist\/node\//.test(filePath) ||
                    /loadable-stats/.test(filePath)
                );
            },
        })
    );
}

const nodeStats = path.resolve(__dirname, "./dist/node/loadable-stats.json");

const webStats = path.resolve(__dirname, "./dist/web/loadable-stats.json");

app.get("/api/heavy", async (_, res) => {
    await sleep();

    res.json({ result: true });
});

app.get(["/", "/heavy"], async (req, res) => {
    const url = req.originalUrl;

    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
    const { default: App } = nodeExtractor.requireEntrypoint();

    const webExtractor = new ChunkExtractor({ statsFile: webStats });
    const jsx = webExtractor.collectChunks(React.createElement(App, { url }));

    const html = renderToString(jsx);

    await sleep();

    res.set("content-type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            ${webExtractor.getLinkTags()}
            ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);
});

// eslint-disable-next-line no-console
app.listen(9000, () => console.log("Server started http://localhost:9000"));
