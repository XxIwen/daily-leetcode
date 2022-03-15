function quickSort(array) {
  if (array.length < 2) return array;
  const target = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat([target], quickSort(right));
}
