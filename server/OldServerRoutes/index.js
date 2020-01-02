const overview = require("./overview");
const specs = require("./specs");
const reviews = require("./reviews");

module.exports = app => {
    app.use('/overview', overview);
    app.use('/specs', specs);
    app.use('/reviews', reviews);
}