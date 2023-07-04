import { makeStack, isEmpty  } from "../src/stack.js";
import _ from 'lodash';
import fs from 'fs';

test("stack's main flow", () => {
  const stack = makeStack;
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
  const stack = makeStack;
  expect(isEmpty(stack)).toBe(true);
  stack.push('two');
  expect(isEmpty(stack)).toBe(false);
  stack.pop();
  expect(isEmpty(stack)).toBe(true);
});

test('includes', () => {
  const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false];

  expect(_.includes(coll, 3)).toBe(true);
  expect(_.includes(coll, 11)).toBe(false);
});

let now;

beforeEach(() => {
  now = Date.now();
});

test('first example', () => console.log(now));
test('second example', () => console.log(now));

// let fileData;

// beforeAll(() => {
//   fileData = fs.readFileSync('path/to/file');
// });