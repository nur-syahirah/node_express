/* //install express for us to run this project
express allows us to create end-points to listen for incoming requests */

//implies that the code writte here uses strict rules 
'use strict';

const express = require('express'); //import express

//constants 
const PORT = 8888;                  // port address that the app is listening to
const HOST = '127.0.0.1';           // default localhost, http://127.0.0.1:8080 == http://localhost:8080
const OS = require('os');           // import os environment, library
const ENV = "DEV";                   // specify that this proj is under development / "PROD" for production

//app

const app = express();              // invoke the express library
app.get("/",(req,res)=>{            // listen for get request: http://127.0.0.1/, callback function program
    res.statusCode = 200;            // set the status code to 200 === SUCCESS
    //const msg = `Hello World! from ${HOST}:${PORT} on ${ENV} environment`; // create response message
    const msg = "Hello FSD learners!";
    res.send(msg);                  // send the message to the client
});

app.get("/test",(req,res)=>{               // listen for get request: http://127.0.0.1/test)
    res.statusCode = 200;                  // set the status code to 200 === SUCCESS
    const msg = `Hello from /test Node`;   // create response message
    res.send(msg);                         // send the message to the client
});

app.listen(PORT,HOST);                                      // invoke the listen() method for app, listen to port 8080, host 1.1.1
console.log(`Server running at http://${HOST}:${PORT}/`);   // log the start of the app to listen for requests
