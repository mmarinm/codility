/*
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.
*/

function solution(A) {
    let zeroCount = 0
    let pairs = 0

    for (let i = 0; i < A.length; i++) {
        const el = A[i];
        if(el === 0){
            zeroCount += 1
        } else if(el ===1 ){
            pairs += zeroCount
        }
    }
    return pairs
}

const A = [0,1,0,1,1]
console.log(solution(A))