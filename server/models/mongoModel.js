const mongoDB = require('../db/index.js');

module.exports.findProduct = async ({ id }) => {
  const results = await mongoDB.find({ _id: Number(id) }).toArray();
  return results[0];
};
