import { expect } from 'chai';
import { solution } from './sum';

describe('sum', function() {
  [
    {
      X: 1,
      Y: 2,
      expected: 3
    }
  ].forEach(context => {
    it(`X: ${context.X} Y: ${context.Y} `, function() {
      expect(solution(context.X, context.Y)).to.eql(context.expected);
    });
  });
});
