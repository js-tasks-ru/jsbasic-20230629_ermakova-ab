function filterRange(arr, a, b) {
  let result = arr.slice(0, arr.length).filter(item => item <= b && item >= a);
  return result;
}
