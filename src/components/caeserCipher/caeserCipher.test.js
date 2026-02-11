import caeserCipher from "./caeserCipher.js";

test("check module exists", () => {
  expect(caeserCipher).toBeDefined;
});

test("check lower case strings", () => {
  testCases = [
    {
      case: {
        str: "abc",
        shift: 3,
      },
      expected: "def",
    },
    {
      case: {
        str: "xyz",
        shift: 3,
      },
      expected: "abc",
    },
  ];

  testCases.forEach((t) => {
    expect(caeserCipher(t.case.str, t.case.shift)).toBe(t.expected);
  });
});

test("check string with non letters", () => {
  expect(caeserCipher("1abc ", 3)).toBe("1def ");
});

test("check for capital letters", () => {
  expect(caeserCipher("ABC", 3)).toBe("DEF");
});

test("reverse direction", () => {
  expect(caeserCipher("abc", -3)).toBe("xyz");
});
