const masterMind = require("./script");

test("checkResult -> check w/ non-valid answer (one color)", () => {
  expect(masterMind.checkResult("red")).toBe(false);
});

test("checkResult -> check w/ valid answer (enough colors)", () => {
  expect(masterMind.checkResult(["red", "blue"])).toBe(false);
});

test("checkResult -> check w/ THE good answer", () => {
  expect(masterMind.checkResult(["red", "yellow"])).toBe(true);
});

test("validColors -> test with valids colors", () => {
  expect(masterMind.validColors(["red", "yellow"])).toBe(true);
});
