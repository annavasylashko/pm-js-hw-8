const assert = require("assert");

const extendWithEndless = (...args) =>
  args.reduce((acc, curr) => {
    return { ...acc, ...curr };
  });

assert.deepStrictEqual(
  extendWithEndless(
    {
      flatWhite: ["doppio", "hot", "milk"],
      isValid: true,
    },
    {
      isValid: false,
      additionalProp: { thisIsGoodProp: 123 },
    },
    { prop3: true },
    { prop4: true },
    { isValid: [false, false] }
  ),
  {
    flatWhite: ["doppio", "hot", "milk"],
    isValid: [false, false],
    additionalProp: { thisIsGoodProp: 123 },
    prop3: true,
    prop4: true,
  }
);

console.log("Looks good");
