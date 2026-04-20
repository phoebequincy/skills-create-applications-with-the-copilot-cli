#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations (four basic arithmetic operations):
 *   + : Addition – adds two numbers
 *   - : Subtraction – subtracts the second number from the first
 *   * : Multiplication – multiplies two numbers (use 'x' as an alternative)
 *   / : Division – divides the first number by the second (handles division by zero)
 *
 * Usage:
 *   node calculator.js <number> <operator> <number>
 *
 * Examples:
 *   node calculator.js 10 + 5      → 15
 *   node calculator.js 10 - 3      → 7
 *   node calculator.js 4 x 6       → 24
 *   node calculator.js 20 / 4      → 5
 */

// Addition – adds two numbers
function add(a, b) {
  return a + b;
}

// Subtraction – subtracts the second number from the first
function subtract(a, b) {
  return a - b;
}

// Multiplication – multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Division – divides the first number by the second
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Calculate result based on operator
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error(`Unknown operator '${operator}'. Supported operators: + - * (or x) /`);
  }
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log("Usage: node calculator.js <number> <operator> <number>");
    console.log("Operators: + - * (or x) /");
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
