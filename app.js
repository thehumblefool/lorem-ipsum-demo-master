// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
// app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  
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