/**
 * Fibonacci is a sequence where fibo(N)=fibo(N-1)+fibo(N-2)
 *
 *
 * @param N : fibo sequence
 * @returns fibo sequence value
 */

export function solution(N) {
  if (N < 2) return N;
  else return solution(N - 1) + solution(N - 2);
}
