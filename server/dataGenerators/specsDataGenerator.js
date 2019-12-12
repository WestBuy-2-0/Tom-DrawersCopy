const fs = require("fs");
const _ = require("lodash");

let specCategories = ["Key Specs", "General", "Warranty", "Other"];

// let productCategories = [
//     {id: 1, name: "Westernwear"},
//     {id: 2, name: "Buildings"},
//     {id: 3, name: "Horsies"},
//     {id: 4, name: "Horsy Accessories"},
//     {id: 5, name: "Prospecting"},
//     {id: 6, name: "Home Decor"},
//     {id: 7, name: "Guns and Paraphernalia"},
// ];

let keySpecs = [
  {
    spec_name: "Horsepower",
    spec_value: "180",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Tumbleweed Value",
    spec_value: "5000",
    has_more_info: true,
    more_info_text: "How many tumbleweed do"
  },
  {
    spec_name: "Cowboy Enjoyment",
    spec_value: "Off the charts!",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Outlaw Enjoyment",
    spec_value: "NOT for outlaw use",
    has_more_info: true,
    more_info_text:
      "Please do not use this product for outlaw OR vigilante purposes."
  },
  {
    spec_name: "Like-The-Wind Compatible",
    spec_value: "100% Bullseye-compliant functionality",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Invisibility",
    spec_value: "Yes",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Aliens Included",
    spec_value: "Yes",
    has_more_info: true,
    more_info_text:
      "Denotes inclusion of aliens obtained from the recent Area 51 invasion."
  },
  {
    spec_name: "Desertproofing",
    spec_value: "120-Degree DPX8 Certified Desertproof",
    has_more_info: false,
    more_info_text: null
  }
];

let generalSpecs = [
  {
    spec_name: "Multicolor Options",
    spec_value: "Yes",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Suitable use",
    spec_value: "Rodeo, ranching, a fun Sunday with the family.",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Lifespan",
    spec_value: "~12 years",
    has_more_info: true,
    more_info_text: "Estimated."
  },
  {
    spec_name: "Fun value",
    spec_value: "Off the charts!",
    has_more_info: true,
    more_info_text:
      "A scientific measure of how much joy and happiness this product will bring to your Old Western life. :)"
  },
  {
    spec_name: "Size",
    spec_value: "Biggish",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Quality",
    spec_value: "So high",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Gold",
    spec_value: "Made of solid gold.",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Manufactured in USA",
    spec_value: "Ya darn tootin!",
    has_more_info: false,
    more_info_text: null
  }
];

let warrantySpecs = [
  {
    spec_name: "Manufacturer's Warranty - Yeehaw",
    spec_value: "Lifetime Limited",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Manufacturer's Warranty - Giddyup",
    spec_value: "Lifetime Limited",
    has_more_info: false,
    more_info_text: null
  },
  {
    spec_name: "Manufacturer's Warranty - Rodeo",
    spec_value: "Lifetime Limited",
    has_more_info: false,
    more_info_text: null
  }
];

let otherSpecs = [
  {
    spec_name: "UPC",
    spec_value: "600662538765",
    has_more_info: false,
    more_info_text: null
  }
];

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomNumberBtwn = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateRandomSpecData = (productCount, kSpecs, gSpecs, wSpecs, oSpecs) => {
  const specsData = { specs: [] };
  for (let i = 1; i <= productCount; i++) {
    let shuffledKeys = _.shuffle(kSpecs);
    let shuffledGeneral = _.shuffle(gSpecs);
    let shuffledWarranty = _.shuffle(wSpecs);
    let keySpecsCount = getRandomNumberBtwn(3, 7);
    let genSpecsCount = getRandomNumberBtwn(2, 8);
    let warrantySpecsCount = getRandomNumberBtwn(1, 3);
    for (let k = 1; k <= keySpecsCount; k++) {
      specsData.specs.push({
        id: specsData.specs.length + 1,
        product_id: i,
        spec_category: "Key Specs",
        spec_name: shuffledKeys[k].spec_name,
        spec_value: shuffledKeys[k].spec_value,
        has_more_info: shuffledKeys[k].has_more_info,
        more_info_text: shuffledKeys[k].more_info_text
      });
    }
    for (let g = 1; g <= genSpecsCount; g++) {
      specsData.specs.push({
        id: specsData.specs.length + 1,
        product_id: i,
        spec_category: "General",
        spec_name: shuffledGeneral[g].spec_name,
        spec_value: shuffledGeneral[g].spec_value,
        has_more_info: shuffledGeneral[g].has_more_info,
        more_info_text: shuffledGeneral[g].more_info_text
      });
    }
    for (let w = 1; w <= warrantySpecsCount; w++) {
      specsData.specs.push({
        id: specsData.specs.length + 1,
        product_id: i,
        spec_category: "Warranty",
        spec_name: shuffledWarranty[w].spec_name,
        spec_value: shuffledWarranty[w].spec_value,
        has_more_info: shuffledWarranty[w].has_more_info,
        more_info_text: shuffledWarranty[w].more_info_text
      });
    }
    specsData.specs.push({
        id: specsData.specs.length + 1,
        product_id: i,
        spec_category: "Other",
        spec_name: oSpecs[0].spec_name,
        spec_value: oSpecs[0].spec_value,
        has_more_info: oSpecs[0].has_more_info,
        more_info_text: oSpecs[0].more_info_text
      });
  }
  
  return specsData;
};

const writeSpecs = () => {
  let allSpecs = generateRandomSpecData(
    100,
    keySpecs,
    generalSpecs,
    warrantySpecs,
    otherSpecs
  );
  let data = JSON.stringify(allSpecs, null, 2);

  fs.writeFile("specData.json", data, err => {
    if (err) {
      throw err;
    }
    console.log("Spec data file written!");
  });
};

module.exports.writeSpecs = writeSpecs;
