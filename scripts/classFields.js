'use strict';

const million = 1_000_000;

class Test {
  #value;

  constructor(value = million) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }
}

const test = new Test();

console.log(test.getValue());
