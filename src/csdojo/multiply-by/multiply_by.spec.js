import { expect } from "chai";
import { solution } from "./multiply_by";

describe("multiply_by", function() {
  [
    { N: [3, 2], K: 6, expected: [3, 2] },
    { N: [3, 2], K: 6, expected: [3, 2] },
    { N: [3, 3, 1, 9], K: 9, expected: [3, 3] },
    { N: [3, 3, 2, 4, 5], K: 12, expected: [3, 4] },
    { N: [3, 9, 2, 3, 1, 81], K: 81, expected: [1, 81] },
    { N: [1, 81, 1, 3], K: 81, expected: [1, 81] }
  ].forEach(context => {
    it(`N: ${context.N}`, function() {
      expect(solution(context.N, context.K)).to.eql(context.expected);
    });
  });
});
