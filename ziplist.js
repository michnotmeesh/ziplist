function zipList(first, second) {
  let result = [];
  for (let i = 0; i < (2 * first.length); i++) {
    if (i % 2 === 0) {
      result[i] = second[i - 1];
    } else {
      result[i] = first[i];
    }
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));