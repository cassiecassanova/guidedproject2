const express = require("express");


const app = express();

app.use(express.json());

//GET REQUESTS
app.get("", function(req, res) {

})

//PUT REQUESTS

const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);
