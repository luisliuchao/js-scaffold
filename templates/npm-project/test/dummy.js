import { expect } from 'chai';
import { expected, testLog } from './helper';
import { errorMsg } from '../src/util';
import Calculator from '../src/Calculator';

describe('it passes the dummy test', function() {
  it(`calculates 1+1 correctly as ${expected['1+1']}`, function() {
    const c = new Calculator();
    expect(c.compute(1, 1)).to.equal(2);
  });

  it('warns when not enough parameters are passed', function() {
    const c = new Calculator();
    expect(() => {
      c.compute(1);
    }).to.throw(errorMsg.notEnoughParas);
  });
});
