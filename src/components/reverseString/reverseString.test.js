import reverseString from "./reverseString.js";

test("check if module exists", () => {
  expect(reverseString).toBeDfined;
});

test("check if string is reversed", () => {
  testCases = [
    {
      case: "hi",
      expected: "ih",
    },
    {
      case: "bye",
      expected: "eyb",
    },
    {
      case: "Hello World",
      expected: "dlroW olleH",
    },
  ];

  testCases.forEach((t) => {
    expect(reverseString(t.case)).toBe(t.expected);
  });
});
