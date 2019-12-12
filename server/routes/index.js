const description = require("./description");

module.exports = app => {
    app.use('/description', description);
}