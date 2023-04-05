// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
// app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {

  console.log('#######################');
  console.log(JSON.stringify({
    query: req.query,
    userAgent: req.headers['user-agent'],
    connectingIp: req.headers['cf-connecting-ip'],
    ipCountry: req.headers['cf-ipcountry'],
    trueClientIp: req.headers['true-client-ip'],
    xff: req.headers['x-forwarded-for']
  }, null, 2));
  console.log('#######################');
  
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <meta name="Description" CONTENT="Sample for Google assistant">
      <title>Sample for Google assistant</title>
  </head>
  
  <body>
      <h1>A title</h1>
      <p>
      Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.Here is an text sample.
      </p>
      <p>
          Here is an text sample.
      </p>
  
  </body>
  
  </html>
  `);
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));