/**
 * ? An array A consisting of N different integers is given.
 * ? The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 * ?
 * ? Your goal is to find that missing element.
 * ?
 * ? Write a function:
 * ?
 * ? function solution(A);
 * ?
 * ? that, given an array A, returns the value of the missing element.
 * ?
 * ? For example, given array A such that:
 * ?
 * ?   A[0] = 2
 * ?   A[1] = 3
 * ?   A[2] = 1
 * ?   A[3] = 5
 * ? the function should return 4, as it is the missing element.
 * ?
 * ? Assume that:
 * ?
 * ? N is an integer within the range [0..100,000];
 * ? the elements of A are all distinct;
 * ? each element of array A is an integer within the range [1..(N + 1)].
 * ? Complexity:
 * ?
 * ? expected worst-case time complexity is O(N);
 * ? expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
 *
 * @param A : array
 * @returns missing element
 */

export function solution(A) {
  var N = A.length + 1;

  //gauss formula: http://mathcentral.uregina.ca/qq/database/qq.02.06/jo1.html
  var gauss = (N * (N + 1)) / 2;

  var sum = 0;
  //current sum
  A.forEach(element => {
    sum += element;
  });

  //element missing by the sums
  return gauss - sum;
}
