function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    let complete = true;
    for (let i = 0; i < array.legnth - 1 - j; i++) {
      if (array[i] > arrya[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }

  return array;
}
