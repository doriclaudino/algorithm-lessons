/**
 * ? A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
 * ?
 * ? Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
 * ?
 * ? The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
 * ?
 * ? In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
 * ?
 * ? For example, consider array A such that:
 * ?
 * ?   A[0] = 3
 * ?   A[1] = 1
 * ?   A[2] = 2
 * ?   A[3] = 4
 * ?   A[4] = 3
 * ? We can split this tape in four places:
 * ?
 * ? P = 1, difference = |3 − 10| = 7
 * ? P = 2, difference = |4 − 9| = 5
 * ? P = 3, difference = |6 − 7| = 1
 * ? P = 4, difference = |10 − 3| = 7
 * ? Write a function:
 * ?
 * ? function solution(A);
 * ?
 * ? that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
 * ?
 * ? For example, given:
 * ?
 * ?   A[0] = 3
 * ?   A[1] = 1
 * ?   A[2] = 2
 * ?   A[3] = 4
 * ?   A[4] = 3
 * ? the function should return 1, as explained above.
 * ?
 * ? Assume that:
 * ?
 * ? N is an integer within the range [2..100,000];
 * ? each element of array A is an integer within the range [−1,000..1,000].
 * ? Complexity:
 * ?
 * ? expected worst-case time complexity is O(N);
 * ? expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
 * ?  *
 * ?  * @param A : array
 * ?  * @returns minimum sub-range diff
 */

export function solution(A) {
  const len = A.length;
  var sum = 0,
    min = 0,
    leftSum = 0,
    rightSum = 0,
    currentMin = 0;

  //ignore minimum length and remove negatives results
  if (len === 2) return Math.abs(A[0] - A[1]);
  if (len === 1) return Math.abs(A[0]);

  //save the sum.
  A.forEach(element => {
    sum += element;
  });

  min = Math.abs(sum - A[0] * 2);

  //with the sum ready, we can calc the diff between the splits
  for (let p = 0; p < len - 1; p++) {
    //total minus leftSide, getting the rightSide as difference
    leftSum += A[p];
    rightSum = sum - leftSum;

    //calc the equilibrium between splits
    currentMin = Math.abs(leftSum - rightSum);
    min = currentMin < min ? currentMin : min;
  }

  return min;
}
