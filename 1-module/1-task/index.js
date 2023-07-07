function factorial(n) {
  let result;
  for (result = 1; n > 1; n--) {
    result *= n;
  }
  return result;
}

factorial(5)