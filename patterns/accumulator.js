/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") {
    return NaN;
  }
  if (n < 0) {
    return undefined;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  }
  if (n <= 0) {
    return [];
  }
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  let longest = "";

  for (let str of strings) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
}

// TODO

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let count = 0;

  for (const student of attendance) {
    if (student) {
      count++;
    }
  }

  return count;
}

// TODO

/**
 * @param {string} dna
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */

// TODO
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }

  let result = "";

  for (let i = 0; i < dna.length; i++) {
    const letter = dna[i];
    if (letter === "A") {
      result += "T";
    } else if (letter === "T") {
      result += "A";
    } else if (letter === "C") {
      result += "G";
    } else if (letter === "G") {
      result += "C";
    }
  }

  return result;
}
