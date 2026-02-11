import calculator from "./calculator.js";

test("module exists", () => {
  expect(calculator).toBeDefined;
});

test("1 + 1 = 2", () => {
  expect(calculator("add", 1, 1)).toBe(2);
});

test("1 - 1 = 0", () => {
  expect(calculator("subtract", 1, 1)).toBe(0);
});

test("2 * 2 = 4", () => {
  expect(calculator("multiply", 2, 2)).toBe(4);
});

test("4 / 2 = 2", () => {
  expect(calculator("divide", 4, 2)).toBe(2);
});
