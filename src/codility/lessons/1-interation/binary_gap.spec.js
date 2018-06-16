import { expect } from "chai";
import { solution } from "./binary_gap";

describe("binary_gap", function() {
  [
    {
      N: 1041,
      expected: 5
    },
    {
      N: 529,
      expected: 4
    },
    {
      N: 15,
      expected: 0
    },
    {
      N: 32,
      expected: 0
    }
  ].forEach(context => {
    it(`N: ${context.N}`, function() {
      expect(solution(context.N)).to.eql(context.expected);
    });
  });
});
