function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input';
  }

  return a + b;
}

console.log(foo(1, '1')); // Output: 2
console.log(foo(1, 1)); // Output: 2
console.log(foo('abc', 1)); // Output: Invalid input