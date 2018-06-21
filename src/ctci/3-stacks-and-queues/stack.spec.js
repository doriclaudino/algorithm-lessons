import { expect } from "chai";
import solution from "./stack";

describe("stack", function() {
  describe("push", function() {
    [
      {
        N: [1, 2, 3],
        step: stack => {
          [1, 2, 3].forEach(i => stack.push(i));
          return stack.pop();
        },
        expected: 3
      },
      {
        N: [],
        step: stack => {
          return stack.pop();
        },
        expected: null
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution());
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("isEmpty", function() {
    [
      {
        N: [],
        step: stack => {
          return stack.isEmpty();
        },
        expected: true
      },
      {
        N: [1],
        step: stack => {
          stack.push(1);
          return stack.isEmpty();
        },
        expected: false
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution());
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("pop", function() {
    [
      {
        N: [1, 2, 3],
        step: stack => {
          [1, 2, 3].forEach(i => stack.push(i));
          return stack.pop();
        },
        expected: 3
      },
      {
        N: [],
        step: stack => {
          return stack.pop();
        },
        expected: null
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution());
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("peek", function() {
    [
      {
        N: [1, 2, 3],
        step: (stack, N) => {
          N.forEach(i => stack.push(i));
          return stack.peek();
        },
        expected: 3
      },
      {
        N: [],
        step: stack => {
          return stack.peek();
        },
        expected: null
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(), context.N);
        expect(result).to.eql(context.expected);
      });
    });
  });
});
