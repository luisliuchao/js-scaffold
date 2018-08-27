import { errorMsg } from './util';

export default class Calculator {
  constructor(id) {
    // init the calculator
    this.id = id || 'new calculator';
  }

  compute() {
    console.log(`${this.id} is calculating`);
    const args = [...arguments];
    if (args.length < 2) {
      throw new Error(errorMsg.notEnoughParams);
    }
    return args.reduce((acc, val) => {
      return acc + parseFloat(val);
    }, 0);
  }
}
