import { expect } from "chai";
import { solution } from "./tape_equilibrium";

describe("tape_equilibrium", function() {
  [
    {
      A: [3, 1, 2, 4, 3],
      expected: 1
    },
    {
      A: [3, 2],
      expected: 1
    }
  ].forEach(context => {
    it(`A: ${context.A}`, function() {
      expect(solution(context.A)).to.eql(context.expected);
    });
  });
});
