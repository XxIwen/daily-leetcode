function disorder(array) {
  var length = array.length;
  var current = length - 1;
  while (current > -1) {
    var index = Math.floor(length * Math.random());
    [array[current], array[index]] = [array[index], array[current]];
    current--;
  }

  return array;
}

// let arr = [11, 09, 10, 13, 14, 08, 16, 02, 05, 12, 06, 03, 07, 04, 01, 15];
// const result = disorder(arr);
// console.log(result);
