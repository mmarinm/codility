function solution(A) {
    let head = A[0] // [-10]
    const firstEl = A.shift()
    let tail = A.reduce((acc, curr) => acc + curr, 0) // [-20, -30, -40, 100]
    A.unshift(firstEl)
    let tapeDiff = Math.abs(head - tail)

    for (let index = 1; index < A.length-1; index++) {
        head += A[index]   // [-10, -20]         [-10, -20, -30]    [-10,  -20, -30, -40]
        tail -= A[index]   // [-30, -40, 100]    [-40, 100]         [100]
        const newDiff = Math.abs(head - tail) 
        if(newDiff < tapeDiff){
            tapeDiff = newDiff
        }
    }    
    
    return tapeDiff
}


const A = [3,1,2,4,3]
const B = [-1000, 1000]
const C = [-10, -20, -30, -40, 100]
solution(A)
solution(B)
solution(C)