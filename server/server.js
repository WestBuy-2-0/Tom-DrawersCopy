const express = require('express');
const port = 3333;

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.listen(port, () => {
    console.log("Now listening on port " + port + "!");
})
