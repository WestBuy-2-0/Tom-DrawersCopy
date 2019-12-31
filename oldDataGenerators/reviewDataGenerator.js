const fs = require("fs");

let titles = [
  "Lorem ipsume cowboy tumbleweed and no stagecoach.",
  "Straw augers beef kettle our crickets.",
  "Metal.",
  "Mallet herbs basil nest, in welding equipment pens quail.",
  "Fertilizer buzz, pur.",
  "Windmill chicks, hen at corn in, lettus a peppers. Cauliflower a seeds quail.",
  "Eggs with watermelon ostriches.",
  "Robbed a bank with this yesterday",
  "Chainsaw foal hay hook, herbs at combine harvester, children is mallet.",
  "Mushrooms zucchini in forage Harvester at sheep with tractor.",
  "Killer scourge scared, drowning helpless sheep at, farmers market",
  "Petting zoo bulls",
  "Outhouse at nails mower. Bulls at rose garden cucumbers mice sunflower wheat in pig. Kidney beans ostrich trucks.",
  "Cat at pineapples pigeons. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies.",
  "John Deere bees",
  "Nails mower. In the straw rain barrels.",
  "Straw augers beef kettle our crickets. Veterinarian at Seeder eggs with watermelon ostriches.",
  "I can see my horse from here!",
  "Donkey, hay hook cucumbers. Garden windmill chicks",
  "Onion organic orange.",
  "And purr ducks canning owls at a squeal.",
  "Sage mower goat.",
  "Goat goose hen horse. Haybine carrots soybeans, owls duck raising or, cheep in plows. Forage Harvester rakes peacocks, squeal garden woof. House he.",
  "Kidney beans ostrich trucks. Shovels at rakes plows!",
  "Straw augers beef kettle our crickets. Lamb in eggplant baler rai.",
  "Barrels manure hay rake. Hoot squeal moose quack, crows doggies frogs crickets chirp.",
  "Quack hammers eggplant is utters nails garden. Killer scourge scared.",
  "Onion organic.",
  "Worst idea ever.",
  "Omg I love this!!",
  "What a grain",
  "Lamb in eggplant",
  "Oink oink wind.",
  "Chirp.",
  "Rooster celery pineapples fertilizer oats and grain",
  "Turkey daisys egg.",
  "Squeal, horses moonshine apples raising Mooo tractor plow.",
  "Gate wind, moonshine horses meow irrigation!",
  "Kidney beans, llamas pick up truck.",
  "Brussel sprouts cow"
];

let texts = [
  "Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Blue berries pigeons buzz and bean prairie dogs nails at est. Brussel sprouts cow, rabbits a gates a, storage shed fences. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. \n\nGoat goose hen horse. veterinarian blue berries cattle jelly canning. House hen chinchillas in barn livestock cat hogs chicks trucks. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Hoot squeal moose quack, crows doggies frogs cricket. \n\nChirp. Utters are weathervane foal est. Cauliflower a seeds quail. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Petting zoo at carrots alligators quack. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Rooster celery pineapples fertilizer, a melon chirp pets in. Cauliflower a seeds quail. Sage mower goat, raccoons rhubar.",
  "Outhouse at nails mower. Onion organic oranges and purr ducks canning owls at a squeal. Grapes at yams mushrooms organic berries gobble. Haybine carrots soybeans, owls duck raising or, cheep in plows. \n\nHoot squeal moose quack, crows doggies frogs crickets chirp. Cat at pineapples pigeons. Lamb in eggplant baler rain barrels manure hay rake. veterinarian blue berrie. Cattle jelly canning. Rooster celery pineapples fertilizer, a melon chirp pets in. Grapes at yams mushrooms organic berries gobble. \n\nIn eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scra.",
  "Chicks, hen at corn in, lettus a peppers. Outhouse at nails mower. Forage Harvester rakes peacocks, squeal garden woof. Straw augers beef kettle our crickets. Mooo cat daisys, grunt in turkey coo, windmill at bull. Prairie dogs raccoons robins rats. Goat goose hen horse. Gourds utters at welding equipment a oink oink haybine. Oranges cucumbers rhubarb gourds watermelon. Shovels at rakes plows. Pick up truck livestock, pet. \n\nAnd storage shed, troughs feed bale manure, is garden wheat oats at augers. Gourds utters at welding equipment a oink oink haybine. Lamb in eggplant baler rain barrels manure hay rake. Blue berries pigeons buzz and bean prairie dog. Nails at est. House hen chinchillas in barn livestock cat hogs chicks trucks. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Quack hammers eggplant i.",
  "Gate grain windmill neigh.",
  "In barn livestock cat hogs chicks trucks. Gourds utters at welding equipment a oink oink haybine. Lamb in eggplant baler rain barrels manure hay rake. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Cauliflower a seeds quail. \n\nGate wind, moonshine horses meow irrigation , with fee. Troughs cheep, or cabbage with pumpkin trees chicken. Grapes at yams mushrooms organic berries gobble. Utters are weathervane foal est. Outhouse at nails mower. Mallet herbs basil nest, in welding equipment pens quail. Onion organic oranges and purr ducks canning owls at a squeal. Cat at pineapples pigeons. \n\nRooster celery pineapples fertilizer, a melon chirp pets in. Grapes at yams mushrooms organi. Berries gobble. Quack hammers eggplant is utters nails garden. Mouse soybeans sweet corn hogs llamas or oink oink wind. Mouse soybeans sweet corn hogs llamas or oink oink wind. Veterinarian at Seeder eggs with watermelon ostriches. Rooster celery pineapples fertilizer, a melon chirp pets in. Kidney beans ostrich trucks. \n\nPick up truck livestock, pets and storage shed, troughs feed bale manure, is garden whea. Oats at augers. Peacocks baa ostriches owls. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Forage Harvester rakes peacocks, squeal garden woof. Oranges cucumber.",
  "Veterinarian blue berries cattle jelly canning. Outhouse at nails mower. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Mooo cat daisys, grunt i. Turkey coo, windmill at bull. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Cat at pineapples pigeons. Bulls at rose garden cucumbers mice sunflower whea. In pig. \n\nCoo with rabbits ect. Gourds utters at welding equipment a oink oink haybine. Lettus gobblers pens, radish on kidney beans, llamas pick up truck. Mouse soybeans sweet corn hogs llamas or oink oink wind. Post pounder calf, hay or duck is, tool shed horse. Shovels at rakes plows. Grapes at yams mushrooms organic berries gobble. Goose hammers cattle rats in crows. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at cor.",
  "Cabbage with pumpkin trees chicken. Lettus gobblers pens, radish on kidney beans, llamas pick up truck. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Baa potato donkey mouse, at gate grain.",
  "Bins woof. John Deere bees, parsley sweet corn at, porky pig shovels. Shovels at rakes plows. Rooster celery pineapples fertilizer, a melon chirp pets in. Petting zoo at carrots alligators quack. Mouse soybeans sweet corn hogs llamas or oink oink wind. Turkey daisys egg. \n\nSqueal, horses moonshine apples raising Mooo tractor plow. Rooster celery pineapples fertilizer, a melon chirp pets in. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. In thy stagecoach.",
  "Coo with rabbits ect. Lamb pig rooster sheep. Mooo cat daisys, grunt in turkey coo, windmill at bull. Onion organic oranges and purr ducks canning owls at .",
  "Squeal. Prairie dogs raccoons robins rats. Mouse soybeans sweet corn hogs llamas or oink oink wind. In eggplant, quonset is grain bins, grain truck. \n\nQuonset pole shed, with fences gates zucchini carrots scrap metal. Cauliflower a seeds quail. Grapes at yams mushrooms organic berries gobble. Brussel sprouts cow, rabbits a gates a, storage shed fences. Mooo cat daisys, grunt in turkey coo, windmill at bull. Prairie dogs raccoons robins rats. Utters are weathervane foal est. In eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Prairie dogs raccoons robins rats. Augers oat.",
  "Hen cowpies. Peacocks baa ostriches owls. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb in eggplant baler rain barrels manure hay rake. Oranges cucumbers rhubarb gourds watermelon. Onion organic oranges and purr ducks canning owls at a squeal. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Peacocks baa ostriche. \n\nOwls. Kidney beans ostrich trucks. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Rooster celery pineapples fertilizer, a melon chirp pets in. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Gourds utters at welding equipment a oin. \n\nOink haybine. Kidney beans ostrich trucks. Gourds utters at welding equipment a oink oink haybine. Hoot squeal moose quack, crows doggies frogs crickets chirp. Ewes fox, hay hook ha. \n\nManure, John Deere radish barn, a hay loft house at pony. Utters are weathervane foal est. Lamb pig rooster sheep. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Killer scourge scared, drowning helpless sheep at, farmers market.",
  "Prairie dogs raccoons robins rats. Augers oats hen cowpies. Bulls at rose garden cucumbers mice sunflower wheat in pig. Veterinarian at Seeder eggs with watermelon ostriches. Utters ar.",
  "Weathervane foal est. bull bowels cat chicken cow, calf donkey duck. Shovels at rakes plows. bull bowels cat chicken cow, calf donkey duck. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Coo with rabbits ect. Coo with rabbits ect. Turkey daisys eggs squeal, horses moonshine apples raising Moo. \n\nTractor plow. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Outhouse at nails mower. Gobble feed, jelly peppers a giddyup pony!!",
  "Plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Cat at pineapples pigeons. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Quack hammers eggplant is utters nails garden. Augers oats hen cowpies. Outhouse at nails mower. Kidney beans ostrich trucks. House hen chinchillas in barn livestock cat hogs chicks trucks. Grapes at yams mushrooms organic berries gobble. Petting zoo at carrots alligator.",
  "Quack.",
  "Shovels at rakes plows. Hoot squeal moose quack, crows doggies frogs crickets chirp. \n\nLettus gobblers pens, radish on kidney beans, llamas pick up truck.",
  "Hay hook hay manure, John Deere radish barn, a hay loft house at pony. veterinarian blue berries cattle jelly canning. Post pounder calf, hay or duck is, tool shed horse. House hen chinchillas in barn livestock cat hogs chicks trucks. Haybine carrots soybeans, owls duck raising or, cheep in plows. Quack hammers eggplant is utters nails garden. Mallet herbs basil nest. \n\nIn welding equipment pens quail. Rooster celery pineapples fertilizer, a melon chirp pets in. Cat at pineapples pigeons. Kidney beans ostrich trucks.",
  "Nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Baa potato donkey mouse, at gate grain bins woof. \n\nMoo.",
  "Cat daisys, grunt in turkey coo, windmill at bull. Blue berries pigeons buzz and bean prairie dogs nails at est. Peacocks baa ostriches owls.",
  "Cat at pineapples pigeons. Utters are weathervane foal est. In the straw rain barrels. Cauliflower a seeds quail. Mallet herbs basil nest, in welding equipment pens quail. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Hoot squeal moose quack, crows doggies frogs crickets chirp. Garden windmil. Chicks, hen at corn in, lettus a peppers. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Outhouse at nails mower. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Brussel sprouts cow, rabbits a gates a, storage shed fences. Gourds utters at welding equipment a oin. \n\nOink haybine. Coo with rabbits ect. Goat goose hen horse. . Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Utters are weathervane foal est. Veterinarian at Seeder eggs with watermelon ostriches. Lamb in eggplant baler rain barrels manure hay rake. Utters are weathervane foal est. Grape.",
  "Goat goose hen horse. Goose hammers cattle rats in crows. Mouse soybeans sweet corn hogs llamas or oink oink wind.",
  "Plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. \n\nLettus gobblers pens, radish on kidney beans, llamas pick up truck. \n\nKidney beans ostrich trucks. \n\nOranges cucumbers rhubarb gourds watermelon. \n\nHouse hen chinchillas in barn livestock.",
  "Cat hogs chicks trucks. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Goat goose hen horse. In eggplant, quonset is grain. Bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Cat at pineapples pigeons. Chainsaw foal hay hook, herbs at combine harvester, children neigh neigh.",
  "Mallet. Lamb in eggplant baler rain barrels manure hay rake.",
  "Pounder calf, hay or duck is, tool shed horse. Garden windmill chicks, hen at corn in, lettus a peppers. Lamb in eggplant baler rain barrels manure hay rake. Ewes fox, hay hook hay manure, John Deere radis. \n\nBarn, a hay loft house at pony. Baa potato donkey mouse, at gate grain bins woof. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Quack hammers eggplant is utters nails garden. Rooster celery pineapples fertilizer, a melon chirp pets in. Rooster celery pineapples fertilizer, a melon chirp pets in.",
  "Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Brussel sprouts cow, rabbits a gates a, storage shed fences. Mallet herbs basil nest, in welding equipment pens quail. Bulls at rose garden cucumbers mice sunflower wheat in pig. Augers oats hen cowpies. Kidney beans ostrich trucks. Goat goose hen horse. Brussel sprouts cow, rabbits a gates a. \n\nStorage shed fences. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Straw augers beef kettle our crickets. Lamb pig rooster sheep. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Ewes mushrooms zucchini in forage Harvester at sheep.",
  "With tractor. Outhouse at nails mower. Petting zoo at carrots alligators quack. Lamb pig rooster sheep. In the straw rain barrels. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Ewes fox. \n\nHay hook hay manure, John Deere radish barn, a hay loft house at pony. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Mooo cat daisys, grunt in turkey coo, windmill at bull. Mallet herbs basil nest, in welding equipment pens quail. Pick up truck livestock, pet.",
  "Sweet corn at, porky pig shovels.",
  "Feed in a woof, a farmers market.",
  "Berries gobble.",
  "Goat goose hen horse. John Deere bees, parsley sweet corn at, porky pig shovels. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. . Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin.",
  "Peacocks baa ostriches owls. Grapes at yams mushrooms organic berries gobble. veterinarian blue berries cattle jelly canning. Shovels at rakes plows. John Deere bees, parsley sweet corn at, porky pig shovels. Post pounder calf, hay or duck is, tool shed. \n\nHorse.",
  "Plows maple syrup yearlings, quilt squeak doggies. Cat at pineapples pigeons. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony. \n\nRobins peacocks an kale. Grapes at yams mushrooms organic berries gobble. Oranges cucumbers rhubarb gourds watermelon. Mooo cat daisys, grunt in turkey coo, windmill at bull. Augers oats hen cowpies. House hen chinchillas in barn livestock cat hogs chicks trucks. Grapes at yams mushroom. \n\nOrganic berries gobble. bull bowels cat chicken cow, calf donkey duck. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Straw augers beef kettle our crickets. bull bowels cat chicken cow, calf donkey duck. Feed in a woof, a farmers market. Shovels at rakes plows. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeded.",
  "Onion. Coo with rabbits, etc.",
  "Shovels at rakes plows. Oranges cucumbers rhubarb gourds watermelon. Garden windmill chicks, hen at corn in, lettus a peppers. \n\nApples ducks straw, quail a ostriches donkey, hay hook cucumbers. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Straw augers beef kettle our crickets. Augers oats howdy pardner.",
  "Bulls at rose garden cucumbers mice sunflower wheat in pig. Gourds utters at welding equipment a oink oink haybine. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Ewes mushrooms zucchini in forage Harvester at sheep with tractor. Mouse soybeans sweet corn hogs llamas or oink oink wind. Oranges cucumbers rhubarb gourds watermelon. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin tree. \n\nChicken. Gourds utters at welding equipment a oink oink haybine. Quack hammers eggplant is utters nails garden. Kidney beans ostrich trucks. Cat at pineapples pigeons. Lamb i don't ride with you. \n\nEggplant baler rain barrels manure hay rake. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Goose hammers cattle rats in crows. Quack hammers eggplant is utters nails garden. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. In the straw rain barrels. Oranges cucumbers rhubarb gourds watermelon. Straw augers beef kettle our crickets. Gourds utter. \n\nAt welding equipment a oink oink haybine. Brussel sprouts cow, rabbits a gates a, storage shed fences. Brussel sprouts cow, rabbits a gates a, storage shed fences. Quack hammers eggplant is utters nails garden. Forage Harvester rakes peacocks.",
  "Squeal garden woof. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Cauliflower a seeds quail. Grapes at yams mushrooms organic berries gobble. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Goose hammers cattle rats in crows. Combine Harvester swather, baler as haybine parsley, melon.",
  "In hay rake. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. In eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Forage Harvester rakes peacocks, squeal garden woof. Petting zoo at carrots alligators quack. Grapes at yams mushrooms organic berries gobble. Peacocks baa ostriches owls. Forage Harvester rakes peacocks, squeal garden woof. Straw augers bee. \n\nKettle our crickets. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Shovels at rakes plows. Lamb pig rooster sheep. Sage mower goat, raccoons rhubarb outhouse a, apple.",
  "Corn in, lettus a peppers.",
  "Peacocks baa ostriches owls. Baa potato donkey mouse, at gate grain bins woof. Garden windmill chicks, hen at corn in, lettus a peppers.",
  "Rooster celery pineapples fertilizer, a melon chirp pets in. Goat goose hen horse. Onion organic oranges and purr ducks canning owls at a squeal. Coo with rabbits ect. Haybine carrots soybeans, owls duck raising or, cheep in plows. Utters are weathervane foal est. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. veterinarian blue berries cattle jelly canning. Petting zoo at carrots alligators quack. Hoot squeal moose quack, crows doggies frogs crickets chirp. In quilt yearlings, gobbler. \n\nCowpies mice. Garden windmill chicks, hen at corn in, lettus a peppers. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Baa potato donkey mouse, at gate grain bins woof. Petting zoo at carrots alligators quack. Lettus gobblers pens, radish on my horse.",
  "Kidney beans, llamas pick up truck. Outhouse at nails mower. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Cauliflower a seeds quail. Lamb in eggplant baler rain barrels manure. \n\nHay rake. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Gourds utters at welding equipment a oink oink haybine. House hen chinchillas in barn livestock cat hogs chicks trucks. Blue berries pigeons buzz and bean prairie dogs nails at est. Chainsaw foal hay hook, herbs at mineshaft."
];

let usernames = [
  "willrogers",
  "jwHardin87",
  "billyda_kid",
  "tomKETCHUMAll84",
  "itsJohnWayne",
  "bcassidy88",
  "oakleyshoots",
  "THE_buffalobill",
  "sundancekid",
  "w_earp_1888",
  "jessejames",
  "DAVYCROCKETT",
  "sayGeronimo1900",
  "shesCalamityJane45",
  "cowboy75",
  "cowgirl99",
  "horseLuvr1954",
  "wildwestguy085",
  "imanoutlaw_",
  "tumbleweedblowininthewind",
  "horsies4lyfe",
  "monumentValleyGuy",
  "irobbedabank69",
  "sheriffBob",
  "woody",
  "jesseYeehaw97",
  "runninlikethewindBullseye",
  "JDisAstud",
  "JDisAdisaster",
  "ish",
  "collin",
  "mushroomMan",
  "natalia",
  "iluvjetbrains",
  "zubairDontCare",
  "zubairLuvsCatz",
  "zubair_luvs_donuts",
  "pandasSUCK",
  "BlazinSaddles",
  "my_lil_ponies",
  "pineapple_on_pizza",
  "IMASENIORNOWWWW"
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

let cowboyTitles = cowboyify(titles);
let cowboyReviews = cowboyify(texts);

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomRating = () => {
  return Math.floor(Math.random() * 5) + 1;
};

const getMajTrueBool = () => {
  //used for both randomizing Verified Purchases AND Would Recommend
  return Math.random() > 0.2;
};

const generateRandomReviews = (
  productCount,
  reviewTitles,
  reviewTexts,
  reviewUsernames
) => {
  const reviewData = { count: 0, reviews: [] };
  for (let i = 1; i <= productCount; i++) {
    let reviewCount = getRandomNumber(41);
    for (let j = 1; j <= reviewCount; j++) {
      let tIndex = getRandomNumber(reviewTitles.length);
      let rIndex = getRandomNumber(reviewTexts.length);
      let uIndex = getRandomNumber(reviewUsernames.length);
      let ratedFeatures = getMajTrueBool();
      let qualityRating = null;
      let valueRating = null;
      let easeOfUseRating = null;
      if (ratedFeatures) {
        qualityRating = getRandomRating();
        valueRating = getRandomRating();
        easeOfUseRating = getRandomRating();
      } 
      reviewData.reviews.push({
        id: reviewData.count + 1,
        product_id: i,
        submitter: reviewUsernames[uIndex],
        submission_date: new Date(),
        rating: getRandomRating(),
        title: reviewTitles[tIndex],
        text: reviewTexts[rIndex],
        verified_purchase: getMajTrueBool(),
        would_recommend: getMajTrueBool(),
        helpful_count: getRandomNumber(20),
        unhelpful_count: getRandomNumber(20),
        rated_features: ratedFeatures,
        quality_rating: qualityRating,
        value_rating: valueRating,
        ease_of_use_rating: easeOfUseRating
      });
      reviewData.count++;
    }
  }
  return reviewData;
};

const writeReviews = () => {
  let allReviews = generateRandomReviews(
    100,
    cowboyTitles,
    cowboyReviews,
    usernames
  );
  let data = JSON.stringify(allReviews, null, 2);

  fs.writeFile("allReviewData.json", data, err => {
    if (err) {
      throw err;
    }
    console.log("Review data file written!");
  });
};

module.exports.writeReviews = writeReviews;
