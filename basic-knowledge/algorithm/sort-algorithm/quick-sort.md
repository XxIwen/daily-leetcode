## 思想

- 分治 + 递归
- 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。

- 实现步骤：

- 选择一个基准元素 target（一般选择第一个数）
- 将比 target 小的元素移动到数组左边，比 target 大的元素移动到数组右边
- 分别对 target 左侧和右侧的元素进行快速排序

## 解法

```js
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
```

## 复杂度

时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)

空间复杂度: O(logn)（递归调用消耗）

## 稳定性

不稳定
