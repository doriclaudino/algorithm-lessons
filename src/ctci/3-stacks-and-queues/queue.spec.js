import { expect } from "chai";
import solution from "./queue";

describe("queue", function() {
  describe("isEmpty", function() {
    [
      {
        N: [],
        step: queue => {
          return queue.isEmpty();
        },
        expected: true
      },
      {
        N: [1],
        step: queue => {
          queue.add(1);
          return queue.isEmpty();
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

  describe("add", function() {
    [
      {
        N: [1, 2, 3],
        step: queue => {
          [1, 2, 3].forEach(i => queue.add(i));
          return queue.peek();
        },
        expected: 1
      },
      {
        N: [],
        step: queue => {
          queue.add(1);
          return queue.peek();
        },
        expected: 1
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution());
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("remove", function() {
    [
      {
        N: [1, 2, 3],
        step: queue => {
          [1, 2, 3].forEach(i => queue.add(i));
          return queue.remove();
        },
        expected: 1
      },
      {
        N: [],
        step: queue => {
          return queue.remove();
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
        step: (queue, N) => {
          N.forEach(i => queue.add(i));
          return queue.peek();
        },
        expected: 1
      },
      {
        N: [],
        step: queue => {
          return queue.peek();
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
