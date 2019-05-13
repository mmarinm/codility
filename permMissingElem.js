function solution(A) {
    let result = 0
    const length = A.length
    
    for (let i = 0; i < length; i++) {
        result ^= A[i] ^ (i+1);
        
    }
        
    return result ^ (length + 1)
}


function solution2(A) {
    const N = A.length + 1
    const sumN = (N * (N+1)) /2
    return sumN - A.reduce((acc, curr)=> acc + curr,0)
}

const B = solution([2,3,1,5])
const C = solution2([2,3,1,5])
console.log(B);
console.log(C);
