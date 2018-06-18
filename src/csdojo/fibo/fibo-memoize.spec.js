import { expect } from "chai";
import { solution } from "./fibo-memoize";

describe("fibo-memoize", function() {
  [
    { N: 3, expected: 2 },
    { N: 5, expected: 5 },
    { N: 10, expected: 55 },
    { N: 100, expected: 354224848179262000000 },
    { N: 1000, expected: 4.346655768693743e208 },
    { N: 5000, expected: Infinity }
  ].forEach(context => {
    it(`N: ${context.N}`, function() {
      expect(solution(context.N)).to.eql(context.expected);
    });
  });
});
