/**
 * Write a function with return (Array[X] and Array[Y]) that multiply together you get K
 * Return zero if theres no numbers found.
 *
 * @param N : array
 * @param K : multiply target number
 * @returns multiply numbers
 */

export function solution(N, K) {
  let len = N.length,
    memo = [],
    toReturn;

  //two first numbers match
  if (len < 3 && N[0] * N[1] === K) toReturn = N;
  else {
    for (let index = 0; index < len; index++) {
      let current = N[index];
      let toFind = K / current;

      //find on already save value array
      let foundIndex = memo.indexOf(toFind);

      //save the numbers on dif array
      if (foundIndex < 0) memo.push(current);
      else {
        toReturn = [].concat(toFind, current);
        break;
      }
    }
  }

  return toReturn;
}
