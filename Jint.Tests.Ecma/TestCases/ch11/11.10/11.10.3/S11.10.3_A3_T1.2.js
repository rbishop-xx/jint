// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator x | y returns ToNumber(x) | ToNumber(y)
 *
 * @path ch11/11.10/11.10.3/S11.10.3_A3_T1.2.js
 * @description Type(x) and Type(y) vary between primitive number and Number object
 */

//CHECK#1
if ((1 | 1) !== 1) {
  $ERROR('#1: (1 | 1) === 1. Actual: ' + ((1 | 1)));
}

//CHECK#2
if ((new Number(1) | 1) !== 1) {
  $ERROR('#2: (new Number(1) | 1) === 1. Actual: ' + ((new Number(1) | 1)));
}

//CHECK#3
if ((1 | new Number(1)) !== 1) {
  $ERROR('#3: (1 | new Number(1)) === 1. Actual: ' + ((1 | new Number(1))));
}

//CHECK#4
if ((new Number(1) | new Number(1)) !== 1) {
  $ERROR('#4: (new Number(1) | new Number(1)) === 1. Actual: ' + ((new Number(1) | new Number(1))));
}


