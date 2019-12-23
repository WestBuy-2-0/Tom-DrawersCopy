const fs = require('fs');
const path = require('path');

let overviewCSV = 'id, overview\n';
let specsCSV = 'id, specs\n';
let reviewsCSV = 'id, reviews\n';

let random = 3;
let count = 10;

const writeCSVData = (amount) => {
  for (let i = 1; i <= count; i++) {
    const newProduct = combinedGenerator(i, random++);

    overviewCSV += `${i},${JSON.stringify(newProduct.overview)}\n`;
    specsCSV += `${i},${JSON.stringify(newProduct.specData)}\n`;
    reviewsCSV += `${i},${JSON.stringify(newProduct.reviewData)}\n`;
  }

  fs.writeFile(path.join(__dirname, "data/csv/overviews/overviewsData.csv"), overviewCSV, (err) => {
    if(err) throw err;

    console.log("Wrote overviews csv.");
  });

  fs.writeFile(path.join(__dirname, "data/csv/specs/specsData.csv"), specsCSV, (err) => {
    if(err) throw err;

  console.log("Wrote specs csv.");
  });

  fs.writeFile(path.join(__dirname, "data/csv/reviews/reviewsData.csv"), reviewsCSV, (err) => {
    if(err) throw err;

  console.log("Wrote reviews csv.");
  });
};
