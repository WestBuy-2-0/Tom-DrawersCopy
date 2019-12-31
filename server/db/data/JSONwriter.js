const fs = require('fs');
const path = require('path');
const combinedGenerator = require('./combinedGenerator');

const jsonBatch = [];

let random = 3;
let count = 10;

// const writeJSONData = (amount = 1) => {
//   for (let i = 1; i <= amount; i++) {
//     const newProduct = combinedGenerator(i, random++);

//     jsonBatch.push(newProduct);
//   }

//   fs.writeFile(
//     path.join(__dirname, 'data/json/productData.json'),
//     JSON.stringify(jsonBatch, null, 2),
//     (err) => {
//       if (err) throw err;

//       console.log(`Wrote JSON file with ${count} items.`);
//     }
//   );
// };

// writeJSONData(count);

let random = 3;
let count = 10; // 100,000 is the max safe quantity, needs a 70s timeout to be safe (64k ms on tests)
let target = 100;

const writeJSONData = (lastIndex, count = 10, random = 3, target = 100) => {
  console.time('Insertion time for this batch');
  const jsonBatch = [];
  
  if(lastIndex === target) {
    setTimeout(() => {
      console.log('Finished inserting.');
    }, 2000);
    return;
  }

  let stop = lastIndex + count;

  for (let i = lastIndex + 1; i <= stop; i++) {
    const newProduct = combinedGenerator(i, random++);
    jsonBatch.push(newProduct);
    lastIndex++;
    random++;
  }

  db.collection('WestBuyDrawers').insertMany(jsonBatch)
  .then(() => {
    setTimeout(() => {
      writeJSONData(stop, count, random, target);
    }, 10);
    console.log(`Inserted ${count} items into the database. Total made: ${stop} out of ${target}.`);
    console.timeEnd('Insertion time for this batch');
  })
  .catch((err) => {
    throw err;
  })
};

// writeJSONData(0, 100000, 3, 10000000);