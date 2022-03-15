## 思想

### 分治法（Divide and Conquer）+ 递归

- 分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之

  - 将已有序的子序列合并，得到完全有序的序列

  - 即先使每个子序列有序，再使子序列段间有序

  - 若将两个有序表合并成一个有序表，称为二路归并

### 步骤

- 分割：

  - 将数组从中点进行分割，分为左、右两个数组

  - 递归分割左、右数组，直到数组长度小于 2

- 归并：

  - 如果需要合并，那么左右两数组已经有序了。

  - 创建一个临时存储数组 temp，比较两数组第一个元素，将较小的元素加入临时数组

  - 若左右数组有一个为空，那么此时另一个数组一定大于 temp 中的所有元素，直接将其所有元素加入 temp

## 解法

```js
function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const front = array.slice(0, mid);
  const end = array.slice(mid);

  return merge(mergeSort(front), mergeSort(end));
}

function merge(front, end) {
  const temp = [];
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift());
    } else {
      temp.push(end.shift());
    }
  }

  while (front.length) {
    temp.push(front.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
}
```

## 复杂度

时间复杂度：O(nlogn)

空间复杂度: O(n)

## 稳定性

稳定
