const fs = require('fs');
const path = require('path');
const combinedGenerator = require('./combinedGenerator');

const jsonBatch = [];

let random = 3;
let count = 10;

const writeJSONData = (amount = 1) => {
  for (let i = 1; i <= amount; i++) {
    const newProduct = combinedGenerator(i, random++);

    jsonBatch.push(newProduct);
  }

  fs.writeFile(
    path.join(__dirname, 'data/json/productData.json'),
    JSON.stringify(jsonBatch, null, 2),
    (err) => {
      if (err) throw err;

      console.log(`Wrote JSON file with ${count} items.`);
    }
  );
};

writeJSONData(count);
