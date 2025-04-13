'use strict';

/**
 * Implement method Sort
 */
/*
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        let needsSwap;

        if (compareFunction === undefined) {
          needsSwap = String(arr[j]) > String(arr[j + 1]);
        } else {
          needsSwap = compareFunction(arr[j], arr[j + 1]) > 0;
        }

        if (needsSwap) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}
*/
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;
    let cf;

    if (compareFunction === undefined) {
      cf = (a, b) => String(a) > String(b);
    } else {
      cf = compareFunction;
    }

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (cf(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
