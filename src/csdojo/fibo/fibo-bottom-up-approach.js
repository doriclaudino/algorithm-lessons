/**
 * Fibonacci is a sequence where fibo(N)=fibo(N-1)+fibo(N-2)
 *
 *
 * @param N : fibo sequence
 * @returns fibo sequence value
 */

export function solution(N) {
  let memo = [0, 1, 1];
  if (N < 2) return memo[N];

  for (let index = 3; index <= N; index++) {
    memo[index] = memo[index - 1] + memo[index - 2];
  }
  return memo[N];
}
