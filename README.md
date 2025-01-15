# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common, yet subtle, error in JavaScript related to type coercion during arithmetic operations.  JavaScript's loose typing system allows for implicit type conversions, which can lead to unexpected behavior if not handled carefully.

The `bug.js` file showcases a function where type coercion results in string concatenation instead of the expected numerical addition.

The `bugSolution.js` file offers a solution by explicitly checking and converting variable types before performing calculations.