import { expect } from "chai";
import { solution } from "./odd_occurrences_in_array";

describe("odd_occurrences_in_array", function() {
  [
    { A: [0, 0, 3], expected: 3 },
    { A: [0, 0, 0, 0, 1, 0, 0], expected: 1 },
    { A: [0, 3, 1, 3, 0], expected: 1 }
  ].forEach(context => {
    it(`A: ${context.A}`, function() {
      expect(solution(context.A, context.K)).to.eql(context.expected);
    });
  });
});
