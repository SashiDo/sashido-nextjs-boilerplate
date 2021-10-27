/*
 * Advanced Cloud Code Example
 */
const dev = process.env.NODE_ENV !== "production";

const express = require('express');
const app = express();

const next = require("next");

const nextJS = next({
  dev,
  dir: dev ? './' : './repo',
});

const handle = nextJS.getRequestHandler();


app.get('/hello-advanced', (req, res) => {
  res.send("Hello from SashiDo's Advanced Cloud Code");
});

nextJS
  .prepare()
  .then(() => {
    app.get(/^(?!(\/1))/, (req, res) => {
      return handle(req, res)
    });
  }).catch((ex) => {
    console.error(ex.stack);
  });

/*
 * Exporting of module.exports.app is required.
 * we mount it automaticaly to the Parse Server Deployment.
 */

module.exports = app;
