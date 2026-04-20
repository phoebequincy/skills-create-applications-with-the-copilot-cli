const { add, subtract, multiply, divide, calculate } = require("../calculator");

// ============================================================
// Tests based on image examples: 2+3, 10-4, 45*2, 20/5
// ============================================================

describe("Image examples", () => {
  test("2 + 3 = 5", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("10 - 4 = 6", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("45 * 2 = 90", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("20 / 5 = 4", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });
});

// ============================================================
// Addition tests
// ============================================================

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(3, 7)).toBe(10);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(8, 0)).toBe(8);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// ============================================================
// Subtraction tests
// ============================================================

describe("subtract", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test("subtracts a negative number (adds)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-4, -6)).toBe(2);
  });

  test("subtracts zero", () => {
    expect(subtract(7, 0)).toBe(7);
  });

  test("subtracts from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ============================================================
// Multiplication tests
// ============================================================

describe("multiply", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(15, 1)).toBe(15);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-5, -5)).toBe(25);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test("multiplies large numbers", () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });
});

// ============================================================
// Division tests
// ============================================================

describe("divide", () => {
  test("divides two positive numbers evenly", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides with a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("divides two negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(42, 1)).toBe(42);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("divides decimal numbers", () => {
    expect(divide(5.5, 2.5)).toBeCloseTo(2.2);
  });
});

// ============================================================
// calculate() integration tests
// ============================================================

describe("calculate", () => {
  test("handles + operator", () => {
    expect(calculate(100, "+", 200)).toBe(300);
  });

  test("handles - operator", () => {
    expect(calculate(50, "-", 25)).toBe(25);
  });

  test("handles * operator", () => {
    expect(calculate(12, "*", 12)).toBe(144);
  });

  test("handles x as multiplication alias", () => {
    expect(calculate(4, "x", 6)).toBe(24);
  });

  test("handles / operator", () => {
    expect(calculate(100, "/", 4)).toBe(25);
  });

  test("throws on division by zero", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws on unknown operator", () => {
    expect(() => calculate(1, "^", 2)).toThrow("Unknown operator '^'");
  });
});
