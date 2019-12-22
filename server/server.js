const express = require("express");
const mountRoutes = require("./routes");
const cors = require("cors");
const port = 3030;
// const port = process.env.PORT;

const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors());

mountRoutes(app);

app.listen(port, () => {
  console.log("Listening on port " + port + "...");
});
