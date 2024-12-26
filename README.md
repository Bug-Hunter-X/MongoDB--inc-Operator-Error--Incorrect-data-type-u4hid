# MongoDB $inc Operator Error: Incorrect Data Type

This repository demonstrates a common error when using the MongoDB `$inc` operator.  The `$inc` operator is used to increment a numerical field by a given value.  However, attempting to increment a field by a non-numerical value will result in an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Bug Description
The code attempts to increment the `count` field by the string 'abc', which is invalid. This results in a MongoDB error.

## Solution
The corrected code ensures the increment value is a number.  The solution file shows the proper usage of `$inc` with a numerical value.