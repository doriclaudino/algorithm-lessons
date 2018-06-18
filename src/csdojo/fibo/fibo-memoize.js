/**
 * Fibonacci is a sequence where fibo(N)=fibo(N-1)+fibo(N-2)
 *
 *
 * @param N : fibo sequence
 * @returns fibo sequence value
 */

export function solution(N) {
  const fibo = (N, memo = [0, 1, 1]) => {
    if (memo[N]) return memo[N];
    let toReturn = fibo(N - 1, memo) + fibo(N - 2, memo);
    memo[N] = toReturn;
    return toReturn;
  };

  return fibo(N);
}
