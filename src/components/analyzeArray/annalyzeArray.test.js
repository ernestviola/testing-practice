import analyzeArray from "./annalyzeArray.js";

test("check if module exists", () => {
  expect(analyzeArray).tobeDefined;
});

test("average 2 2 2 is 2", () => {
  const arr = [2, 2, 2];
  expect(analyzeArray(arr).average).toBe(2);
});

test("min 1 2 3 is 1", () => {
  const arr = [1, 2, 3];
  expect(analyzeArray(arr).min).toBe(1);
});

test("max 1 2 3 is 3", () => {
  const arr = [1, 2, 3];
  expect(analyzeArray(arr).max).toBe(3);
});

test("length 1 2 3 is 3", () => {
  const arr = [1, 2, 3];
  expect(analyzeArray(arr).length).toBe(3);
});

test("contains all objects", () => {
  const arr = [1, 8, 3, 4, 2, 6];

  expect(analyzeArray(arr)).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
