const express = require("express");
const path = require("path");
const app = express();

const port = 3000

const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}

app.use(function (req, res, next) {
    res.set('x-timestamp', Date.now())
    res.set('x-powered-by', 'cyclic.sh')
    console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
    next();
});

app.use(express.static("public", options));

app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app.get("/about", (req, res) => {
    res.sendFile("about.html");
})



app.listen(port, (req, res) => {
    console.log(`Server started at http://localhost:${port}`)
})