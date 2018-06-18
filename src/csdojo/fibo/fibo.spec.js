import { expect } from "chai";
import { solution } from "./fibo";

describe("fibo", function() {
  [{ N: 3, expected: 2 }, { N: 5, expected: 5 }].forEach(context => {
    it(`N: ${context.N}`, function() {
      expect(solution(context.N)).to.eql(context.expected);
    });
  });
});
