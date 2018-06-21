import { expect } from "chai";
import solution from "./linkedList";

describe("linkedList", function() {
  describe("constructor", function() {
    [
      {
        N: [],
        step: ({ head, tail, length }) => {
          return { head, tail, length };
        },
        expected: { head: null, tail: null, length: 0 }
      },
      {
        N: [1, 2, 3, 4],
        step: ({ head, tail, length }) => {
          return { head: head.data, tail: tail.data, length };
        },
        expected: { head: 1, tail: 4, length: 4 }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("pop", function() {
    [
      {
        N: [],
        step: list => {
          return list.pop();
        },
        expected: null
      },
      {
        N: [1, 2],
        step: list => {
          return {
            data: list.pop().data,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 2, head: 1, tail: 1 }
      },
      {
        N: [1, 2, 3],
        step: list => {
          return {
            data: list.pop().data,
            head: list.head.data,
            tail: list.tail.data,
            length: list.length
          };
        },
        expected: { data: 3, head: 1, tail: 2, length: 2 }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("push", function() {
    [
      {
        N: [],
        step: list => {
          list.push(1);
          return {
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { length: 1, head: 1, tail: 1 }
      },
      {
        N: [1, 2],
        step: list => {
          list.push(4);
          return {
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { length: 3, head: 1, tail: 4 }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("addFirst", function() {
    [
      {
        N: [],
        step: list => {
          list.addFirst(1);
          return {
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { length: 1, head: 1, tail: 1 }
      },
      {
        N: [1, 2],
        step: list => {
          list.addFirst(4);
          return {
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { length: 3, head: 4, tail: 2 }
      },
      {
        N: [1, 2, 3],
        step: list => {
          list.addFirst(4);
          return {
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { length: 4, head: 4, tail: 3 }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("getByPosition", function() {
    [
      {
        N: [],
        step: list => {
          return list.getByPosition(1);
        },
        expected: null
      },
      {
        N: [1, 2, 3],
        step: list => {
          return list.getByPosition(1).data;
        },
        expected: 1
      },
      {
        N: [1, 2, 3],
        step: list => {
          return list.getByPosition(2).data;
        },
        expected: 2
      },
      {
        N: [1, 2, 3, 4],
        step: list => {
          return list.getByPosition(5);
        },
        expected: null
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("removeFirst", function() {
    [
      {
        N: [],
        step: list => {
          return list.removeFirst();
        },
        expected: null
      },
      {
        N: [1, 2, 3],
        step: list => {
          return {
            data: list.removeFirst().data,
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 1, length: 2, head: 2, tail: 3 }
      },
      {
        N: [1, 2, 3, 4],
        step: list => {
          return {
            data: list.removeFirst().data,
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 1, length: 3, head: 2, tail: 4 }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("removeAt", function() {
    [
      {
        N: [],
        step: list => {
          return list.removeAt(2);
        },
        expected: null
      },
      {
        N: [1, 2, 3],
        step: list => {
          return {
            data: list.removeAt(1).data,
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 1, length: 2, head: 2, tail: 3 }
      },
      {
        N: [1, 2, 3],
        step: list => {
          return {
            data: list.removeAt(2).data,
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 2, length: 2, head: 1, tail: 3 }
      },
      {
        N: [1, 2, 3, 4],
        step: list => {
          return {
            data: list.removeAt(4).data,
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 4, length: 3, head: 1, tail: 3 }
      },
      {
        N: [1, 2, 3, 4],
        step: list => {
          return {
            data: list.removeAt(10),
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: null, length: 4, head: 1, tail: 4 }
      },
      {
        N: [1, 2, 3],
        step: list => {
          return {
            data: list.removeAt(Math.ceil(list.length / 2)).data,
            length: list.length,
            head: list.head.data,
            tail: list.tail.data
          };
        },
        expected: { data: 2, length: 2, head: 1, tail: 3 }
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("toArray", function() {
    [
      {
        N: [],
        step: list => {
          return list.toArray();
        },
        expected: []
      },
      {
        N: [1, 2, 3],
        step: list => {
          return list.toArray();
        },
        expected: [1, 2, 3]
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });

  describe("reverse", function() {
    [
      {
        N: [],
        step: list => {
          list.reverse();
          return list.toArray();
        },
        expected: []
      },
      {
        N: [1],
        step: list => {
          list.reverse();
          return list.toArray();
        },
        expected: [1]
      },
      {
        N: [1, 2],
        step: list => {
          list.reverse();
          return list.toArray();
        },
        expected: [2, 1]
      },
      {
        N: [1, 2, 3],
        step: list => {
          list.reverse();
          return list.toArray();
        },
        expected: [3, 2, 1]
      }
    ].forEach(context => {
      it(`N: ${JSON.stringify(context.N)}`, function() {
        let result = context.step(new solution(context.N));
        expect(result).to.eql(context.expected);
      });
    });
  });
});
