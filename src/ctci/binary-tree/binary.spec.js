import { expect } from "chai";
import solution from "./binary";

describe("bst", function() {
  describe("constructor", function() {
    [
      {
        N: [1, 2, 3],
        expected: {
          data: 2,
          left: { data: 1, left: null, right: null },
          right: { data: 3, left: null, right: null }
        }
      },
      {
        N: [1, 2],
        expected: {
          data: 2,
          left: { data: 1, left: null, right: null },
          right: null
        }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = new solution(context.N).root;
        expect(result).to.eql(context.expected);
      });
    });
  });
});
