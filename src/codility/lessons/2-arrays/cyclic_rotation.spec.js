import { expect } from "chai";
import { solution } from "./cyclic_rotation";

describe("cyclic_rotation", function() {
  [
    {
      A: [3, 8, 9, 7, 6],
      K: 3,
      expected: [9, 7, 6, 3, 8]
    },
    {
      A: [0, 0, 0],
      K: 1,
      expected: [0, 0, 0]
    },
    {
      A: [1, 2, 3],
      K: 0,
      expected: [1, 2, 3]
    },
    {
      A: [0],
      K: 5,
      expected: [0]
    },
    {
      A: [],
      K: 5,
      expected: []
    },
    {
      A: [3, 8, 9, 7, 6],
      K: 3,
      expected: [9, 7, 6, 3, 8]
    },
    {
      A: [1, 2, 3, 4],
      K: 4,
      expected: [1, 2, 3, 4]
    }
  ].forEach(context => {
    it(`A: ${context.A}   K: ${context.K}`, function() {
      expect(solution(context.A, context.K)).to.eql(context.expected);
    });
  });
});
