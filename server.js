const express = require('express');
const webpack = require('webpack');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const config = require('./webpack.production.js');
const compiler = webpack(config);
const port = process.env.PORT || 3000;

// Automatic HTTPS connection/redirect
app.enable('trust proxy', true);
// Disabled below rule for Cloudflare DNS Cname 
// flattening config to avoid too many redirects.
// app.use((req, res, next) => {
//     const host = req.headers.host.replace(/^www\./, '');
//     req.secure ? next() : res.redirect(301, `https://${host}${req.url}`);
// });

// Tell express to use the use the webpack.production.js
// configuration file as a base.
app.use(express.static(config.output.path));

// Add json-server to mock data
const router = jsonServer.router(path.join(__dirname, 'db/sonicbox-api.json'));
const middlewares = jsonServer.defaults();
app.use('/api', middlewares);
app.use('/api', router);

// Serve available static files such as robots.txt, sitemap.xml
app.use(express.static(path.resolve(__dirname, 'static')));
// Serve src/assets directory as static files
app.use('/assets', express.static(path.resolve(__dirname, 'src/assets')));

app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) return next(err);
    res.set('content-type', 'text/html').send(result).end();
  });
});

// Serve the files on port 4000.
app.listen(port, function () {
  console.log(`Sonicbox.io app listening on port ${port}!\n`);
});
