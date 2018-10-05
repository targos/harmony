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

async function run2() {
  await 0;
  try {
    await a();
  } catch (e) {
    console.error(e);
  }
}

run1().catch((e) => console.error(e.stack));
run2();
