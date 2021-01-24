const assert = require("assert");

const extendWith = (object1, object2) => {
  return { ...object2, ...object1 };
};

assert.deepStrictEqual(
  extendWith(
    {
      flatWhite: ["doppio", "hot", "milk"],
      isValid: true,
    },
    {
      isValid: false,
      additionalProp: { thisIsGoodProp: 123 },
    }
  ),
  {
    flatWhite: ["doppio", "hot", "milk"],
    isValid: true,
    additionalProp: { thisIsGoodProp: 123 },
  }
);

assert.deepStrictEqual(
  extendWith(
    {
      isValid: false,
      myMax: 9990,
    },
    {
      isValidos: false,
      myMin: 8999,
    }
  ),
  {
    isValid: false,
    myMax: 9990,
    isValidos: false,
    myMin: 8999,
  }
);

console.log("Looks good");
