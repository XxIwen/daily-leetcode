//Init module if you need
var container = new Array(256).fill(-1);
var index = 0;
function Init() {
  // write code here
  container = new Array(256).fill(-1);
  index = 0;
}
//Insert one char from stringstream
function Insert(ch) {
  // write code here
  var chCode = ch.charCodeAt(0);
  if (container[chCode] === -1) {
    container[chCode] = index;
  } else if (container[chCode] >= 0) {
    container[chCode] = -2;
  }
  index++;
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
  // write code here
  var minIndex = 256; // char index of stringstream
  var strCode = 0;

  for (var i = 0; i < container.length; i++) {
    if (container[i] >= 0 && container[i] < minIndex) {
      minIndex = container[i];
      strCode = i;
    }
  }

  return minIndex == 256 ? '#' : String.fromCharCode(strCode);
}

module.exports = {
  Init: Init,
  Insert: Insert,
  FirstAppearingOnce: FirstAppearingOnce,
};
