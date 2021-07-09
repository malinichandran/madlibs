const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("check the output", () => {
    expect(addCommas(1000)).toEqual(1,000)
  })
});

