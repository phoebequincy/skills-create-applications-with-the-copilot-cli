const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

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

// ============================================================
// Tests based on image examples: 5 % 2, 2 ^ 3, √16
// ============================================================

describe("Image examples – extended operations", () => {
  test("modulo with 5 % 2 = 1", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("power with 2 ^ 3 = 8", () => {
    expect(calculate(2, "**", 3)).toBe(8);
  });

  test("square root with √16 = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });
});

// ============================================================
// Modulo tests
// ============================================================

describe("modulo", () => {
  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("handles negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of zero by a number is zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("throws error on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// ============================================================
// Power (exponentiation) tests
// ============================================================

describe("power", () => {
  test("raises a number to a positive exponent", () => {
    expect(power(2, 10)).toBe(1024);
  });

  test("raises a number to the power of zero", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises zero to a positive exponent", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });
});

// ============================================================
// Square root tests
// ============================================================

describe("squareRoot", () => {
  test("returns square root of a perfect square", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test("returns zero for square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns square root of one", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("handles large numbers", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  test("handles decimal input", () => {
    expect(squareRoot(2.25)).toBe(1.5);
  });

  test("throws error for negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for negative decimal", () => {
    expect(() => squareRoot(-0.5)).toThrow("Square root of a negative number is not allowed.");
  });
});

// ============================================================
// calculate() integration tests – extended operations
// ============================================================

describe("calculate – extended operations", () => {
  test("handles % operator", () => {
    expect(calculate(10, "%", 3)).toBe(1);
  });

  test("handles ** operator", () => {
    expect(calculate(3, "**", 4)).toBe(81);
  });

  test("handles sqrt operator", () => {
    expect(calculate(25, "sqrt", 0)).toBe(5);
  });

  test("throws on modulo by zero via calculate", () => {
    expect(() => calculate(10, "%", 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("throws on sqrt of negative via calculate", () => {
    expect(() => calculate(-9, "sqrt", 0)).toThrow("Square root of a negative number is not allowed.");
  });
});
