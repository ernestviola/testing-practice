import capitalize from "./capitalize.js";

test("capitalize module exists", () => {
  expect(capitalize).toBeDefined;
});

test("capitalize first letter", () => {
  testCases = [
    {
      case: "good",
      expected: "Good",
    },
    {
      case: "very good",
      expected: "Very good",
    },
  ];
  testCases.forEach((t) => {
    expect(capitalize(t.case)).toBe(t.expected);
  });
});
