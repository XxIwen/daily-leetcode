## 思想

- 创建一个大顶堆，大顶堆的堆顶一定是最大的元素。

- 交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。

- 从后往前以此和第一个元素交换并重新构建，排序完成。

## 解法

```js
function heapSort(array) {
  createMaxHeap(array);
  console.log(array);
  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    adjust(array, 0, i);
  }
  return array;
}

function adjust(array, index, length) {
  for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
    if (i + 1 < length && array[i + 1] > array[i]) { // 和孩子节点的最大值max比较
      i++;
    }

    if (array[index] < array[i]) { // 小于max — 和max交换位置 - 继续和下一层孩子节点比较，直到队列末尾
      [array[index], array[i]] = [array[i], array[index]];
      index = i;
    } else {
      break;
    }
  }
}

function createMaxHeap(array) {
  const index = Math.floor(array.length / 2) - 1; // 第一个非叶子节点的索引
  for (let i = index; i >= 0; i--) {
    adjust(array, i, array.length); // 从第一个非叶子节点开始依次对数组中的元素进行下沉操作
  }
}

// let arr = [11, 09, 10, 13, 14, 08, 16, 02, 05, 12, 06, 03, 07, 04, 01, 15];
// const result = heapSort(arr);
// console.log(result);
```

## 复杂度

时间复杂度：O(nlogn)

空间复杂度:O(1)

## 稳定性

不稳定
