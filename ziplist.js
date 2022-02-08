function zipList(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i]);
    result.push(second[i]);
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheSimpleWay(first, second) {
  const zips = _.zip(first, second);
  return _.flatten(zips);
}

console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
