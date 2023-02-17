const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000

const options = {
    extensions: ['css','js','ico','jpg','jpeg','png','svg'],
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
    res.sendFile(__dirname + "/index.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
})

app.get("/todo-list", (req, res) => {
    res.sendFile(__dirname + "/public/todo-list.html")
})

app.get("/card", (req, res) => {
    res.sendFile(__dirname + "/public/card.html")
})

// app.get("/weather", (req, res) => {
//     res.sendFile(__dirname + "/public/weather.html")
// })

app.get("/weather", (req, res) => {
    res.sendFile(__dirname + "/public/weatherTwo.html")
})

// app.get("/about", (req, res) => {
//     res.sendFile("about.html");
// })



app.listen(port, (req, res) => {
    console.log(`Server started at http://localhost:${port}`)
})