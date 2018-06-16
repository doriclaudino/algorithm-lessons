import { expect } from "chai";
import { solution } from "./perm_missing_elem";

describe("perm_missing_elem", function() {
  [
    {
      A: [1, 2, 3, 5],
      expected: 4
    },
    {
      A: [4, 2, 3, 1, 6],
      expected: 5
    },
    {
      A: [4, 2, 1],
      expected: 3
    },
    {
      A: [1],
      expected: 2
    }
  ].forEach(context => {
    it(`A: ${context.A}`, function() {
      expect(solution(context.A)).to.eql(context.expected);
    });
  });
});
