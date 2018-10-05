'use strict';

async function a() {
  await 1;
  await b();
}

async function b() {
  await 2;
  await c();
}

async function c() {
  await 3;
  throw new Error('test');
}

async function run1() {
  await 0;
  await a();
}

run1().catch((e) => console.error(e.stack));
