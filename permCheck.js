function solution(A) {
    const counter = new Array(A.length).fill(0);
    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        if (1 < element > A.length) return 0
        if(counter[element-1] !== 0) return 0
        counter[element - 1] = 1
    }
    return 1
    

}


const A = [4,1,3,2]  //1
const B = [4,1,3]  //0
const C = [1, 1]   //0
const D = [1]   //1

console.log('A', A);
console.log(solution(A));


console.log('B', B);
console.log(solution(B));


console.log('C', C);
console.log(solution(C));

console.log('D', D);
console.log(solution(D));

// solution(A)
// solution(B)