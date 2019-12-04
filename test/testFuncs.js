const sum = (a, b) => {
  return a + b;
};

const cowboyify = question => {
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

  let cowboyQuestion = question
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

  return cowboyQuestion;
};

module.exports.sum = sum;
module.exports.cowboyify = cowboyify;
