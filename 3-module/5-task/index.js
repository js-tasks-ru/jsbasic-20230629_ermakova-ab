function getMinMax(str) {
  let newArr = str.split(' ').map(Number).filter(isFinite);
let result = {
  min: 0,
  max: 0
};

for (let i = 0; i <= newArr.length; i++) {
  if (newArr[i] > result.max) {
    result.max = newArr[i];
  }
  if (newArr[i] < result.min) {
    result.min = newArr[i];
  }
}
return result
}
