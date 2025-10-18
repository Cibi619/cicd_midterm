import { add, subtract, multiply, divide, isPrime } from "../simple_utils.js";

describe("simple_utils", () => {
  test("add returns correct sum", () => {
    expect(add(2, 3)).toBe(6);
  });

  test("subtract returns correct difference", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiply returns correct product", () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test("divide returns correct quotient", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("divide throws error on divide by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });

  test("isPrime correctly identifies primes", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(12)).toBe(false);
  });
});
