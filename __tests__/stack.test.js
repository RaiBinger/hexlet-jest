import { makeStack, isEmpty  } from "../src/stack.js";

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

