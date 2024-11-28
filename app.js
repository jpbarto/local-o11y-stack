const express = require("express")
const pino = require('pino');

const logger = pino ();
const app = express()

app.get("/", (req, res) => {
  logger.info ('Processing index request');

  setTimeout(() => {
    res.send("Hello World")
    logger.info ('Responded to caller');
  }, 1000);
})

app.listen(8080, () => {
  logger.info(`Listening for requests on http://localhost:8080`)
})
