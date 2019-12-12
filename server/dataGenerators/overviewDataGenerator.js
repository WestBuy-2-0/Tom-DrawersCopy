const fs = require("fs");

let descriptions = [
  "In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Ewes mushrooms zucchini in forage Harvester at sheep with tractor.",
  "Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Grapes at yams mushrooms organic berries gobble. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Blue berries pigeons buzz and bean prairie dogs nails at est. House hen chinchillas.",
  "Sheep with tractor. Mallet herbs basil nest, in welding equipment pens quail. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Augers oats hen cowpies. Cauliflower a seeds quail. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Augers oats hen cowpies. Forage Harvester, bean and Silage dump, cultivator brussel sprout.",
  "Shed fences. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Mooo cat daisys, grunt."
];

let featureNames = [
  "Rose garden cucumbers mice sunflower wheat in pig.",
  "Goose hammers cattle rats in crows.",
  "Veterinarian at Seeder eggs with watermelon ostriches.",
  "Lamb pig rooster sheep.",
  "Fork sunflower cowpies mice.",
  "Purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt.",
  "Oranges cucumbers rhubarb gourds watermelon.",
  "Shovels.",
  "Peacocks baa ostriches owls.",
  "Quack hammers eggplant is utters nails garden.",
  "Gobble feed, jelly peppers at plow basil swather."
];

let featureDescriptions = [
  "Forage Harvester rakes peacocks, squeal garden woof.",
  "In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Pick up truck livestock, pets and storage shed, troughs feed ball.",
  "Chainsaw foal hay hook, herbs at combine harvester, children is mallet.",
  "Swather, cat weathervane grain trucks, hoot pony robins peacocks and kale. Mooo cat daisys, grunt in turkey coo, windmill at bull. Fertilize.",
  "At pony. Feed in a woof, a farmers market. Grapes at yams mushrooms organic berries gobble.",
  "Owls. Shovels at rakes plows. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Hoot squeal moose quack.",
  "Baa potato donkey mouse, at gate grain bins woof. In quilt yearlings.",
  "Blue berries pigeons buzz and bean prairie dogs nails at est.",
  "Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows.",
  "Hen chinchillas in barn livestock cat hogs chicks trucks. Mallet herbs basil nest, in welding equipment pens quail.",
  "Mooo cat daisys, grunt in turkey coo, windmill at bull. Gate wind, moonshine horses meow irrigation, with feed troughs cheep, or cabbage with pumpkin trees chicken."
];

let includedItems = [
  "Potato donkey mouse",
  "Lamb in eggplant baler with rain barrels and manure hay rake",
  "Lamb pig rooster sheep",
  "Maple syrup worms",
  "Pitch fork sunflower cowpie mice",
  "Grapes at yams mushrooms organic berries gobble",
  "John Deere bees",
  "Goat goose hen horse",
  "Drowning helpless sheep at farmers market",
  "Quack hammers eggplant in utters nails garden",
  "Pick up truck livestock, pets and storage shed"
];

const cowboyify = data => {
  let cowboyData = data.slice();

  let gardenGrapes = /garden|grapes/gi;
  let catHen = /cat|hen/gi;
  let cornKale = /corn|kale/gi;
  let zucchiniOranges = /zucchini|oranges/gi;
  let eggplantGobble = /eggplant|gobble|gobblers/gi;
  let farmersGates = /farmers|gates/gi;
  let ducksDuckPurr = /ducks|purr|duck/gi;
  let miceQuiltMelon = /mice|quilt|melon/gi;
  let peacocksOrganicCelery = /peacocks|organic|celery/gi;
  let grain = /grain/gi;
  let roseRobins = /rose|robins/gi;
  let turkeyParsley = /turkey|parsley/gi;
  let woofCarrots = /woof|carrots/gi;
  let radishYams = /radish|yams/gi;
  let berries = /berries/gi;

  for (let q = 0; q < cowboyData.length; q++) {
    cowboyData[q] = cowboyData[q]
      .replace(gardenGrapes, "outlaw")
      .replace(catHen, "desert")
      .replace(cornKale, "John Wayne")
      .replace(zucchiniOranges, "tumbleweed")
      .replace(eggplantGobble, "stagecoach")
      .replace(farmersGates, "cowboy")
      .replace(ducksDuckPurr, "revolver")
      .replace(miceQuiltMelon, "miner 49er")
      .replace(peacocksOrganicCelery, "railroad")
      .replace(grain, "gold nugget")
      .replace(roseRobins, "ranch")
      .replace(turkeyParsley, "mineshaft")
      .replace(woofCarrots, "frontier")
      .replace(radishYams, "spurs")
      .replace(berries, "fort");
  }

  return cowboyData;
};

let cowboyDescriptions = cowboyify(descriptions);
let cowboyFeatures = cowboyify(featureNames);
let cowboyFeatureDescriptions = cowboyify(featureDescriptions);
let cowboyItems = cowboyify(includedItems);

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomNumberBtwn = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateRandomDescriptionData = (productCount, descrips) => {
  const descriptionData = { descriptions: [] };
  for (let i = 1; i <= productCount; i++) {
    let index = getRandomNumber(descrips.length);
    descriptionData.descriptions.push({
      id: i,
      product_id: i,
      description: descrips[index]
    });
  }
  return descriptionData;
};

const generateRandomFeatureData = (productCount, feats, featDescrips) => {
  const featureData = { features: [] };
  let totalFeatureCount = 0;
  for (let i = 1; i <= productCount; i++) {
    let featureCount = getRandomNumberBtwn(2, 7);
    for (let j = 1; j <= featureCount; j++) {
        let nameIndex = getRandomNumber(feats.length);
        let descripIndex = getRandomNumber(featDescrips.length);
        featureData.features.push({id: totalFeatureCount + 1, product_id: i, feature_name: feats[nameIndex], feature_description: featDescrips[descripIndex]});
        totalFeatureCount++;
    }
  }
  return featureData;
};

const generateRandomIncludedItemData = (productCount, items) => {
  const includedItemData = { included_items: [] };
  let totalIncludedItemCount = 0;
  for (let i = 1; i <= productCount; i++) {
      let itemCount = getRandomNumberBtwn(1, 5);
      for (let j = 1; j <= itemCount; j++) {
          let index = getRandomNumber(items.length);
          includedItemData.included_items.push({id: totalIncludedItemCount + 1, product_id: i, item_name: items[index]});
          totalIncludedItemCount++;
      }
  }
  return includedItemData;
};

const writeOverviewData = () => {
    let allDescriptions = generateRandomDescriptionData(100, cowboyDescriptions);
    let allFeatures = generateRandomFeatureData(100, cowboyFeatures, cowboyFeatureDescriptions);
    let allIncludedItems = generateRandomIncludedItemData(100, cowboyItems);

    let descriptionData = JSON.stringify(allDescriptions, null, 2);
    let featureData = JSON.stringify(allFeatures, null, 2);
    let includedItemData = JSON.stringify(allIncludedItems, null, 2);

    fs.writeFile("overviewDescriptionData.json", descriptionData, err => {
        if (err) {
          throw err;
        }
        fs.writeFile("overviewFeatureData.json", featureData, err => {
            if (err) {
                throw err;
            }
            fs.writeFile("overviewIncludedItemData.json", includedItemData, err => {
                if (err) {
                    throw err;
                }
                console.log("All overview files written!");
            })
        })
    })
};

module.exports.writeOverviewData = writeOverviewData;
