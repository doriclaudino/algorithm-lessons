import { expect } from "chai";
import { solution } from "./frog_jmp";

describe("frog_jmp", function() {
  [
    { A: 10, Y: 85, D: 30, expected: 3 },
    { A: 0, Y: 31, D: 3, expected: 11 },
    { A: 6, Y: 6, D: 3, expected: 0 }
  ].forEach(context => {
    it(`A: ${context.A}   Y: ${context.Y}   D: ${context.D}`, function() {
      expect(solution(context.A, context.Y, context.D)).to.eql(
        context.expected
      );
    });
  });
});
