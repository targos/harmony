'use strict';

async function one(x) {
  return +(await x);
}

async function two(x) {
  return await one(x);
}

two(Symbol()).catch((e) => console.error(e.stack));
