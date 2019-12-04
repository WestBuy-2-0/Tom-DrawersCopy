const testFuncs = require("./testFuncs");

describe("sum", () => {
  test("sum adds two positive numbers", () => {
    expect(testFuncs.sum(4, 5)).toBe(9);
  });

  test("sum adds negative numbers", () => {
    expect(testFuncs.sum(-4, 5)).toBe(1);
  });
});

describe("cowboyify", () => {
  test("cowboyify replaces farm words with western words", () => {
    expect(
      testFuncs.cowboyify(
        "Garden ducks and mice where cat radish berries? I rose grain and turkey for me."
      )
    ).toBe(
      "outlaw revolver and miner 49er where desert spurs fort? I ranch gold nugget and mineshaft for me."
    );
  });
});
