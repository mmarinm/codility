/*
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]

*/

function solution(A){
    const occurrence = new Array(A.length + 1).fill(false)
    
    for (let i = 0; i < A.length + 1; i++) {
        const el = A[i];
        if(el > 0 && el <= A.length + 1){
            occurrence[el-1] = true
        }
    }
    for (let i = 0; i < occurrence.length; i++) {
        const el = occurrence[i];
        if (!el){
            return i + 1
        }
    }
    return 1

}

const A = [1, 3, 6, 4, 1, 2]
const B = [1, 2, 3]
const C = [-1, -3]

console.log(solution(A))
console.log(solution(B))
console.log(solution(C))