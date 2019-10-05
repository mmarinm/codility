function  solution (N,A) {
    let counters = new Array(N).fill(0)
    let maxCounter = 0
    for (let i = 0; i < A.length; i++) {
        const value = A[i];
        if (value > 0 && value <= N){
            counters[value-1] += 1
            const cValue = counters[value - 1]
            if (cValue > maxCounter){
                maxCounter = cValue
            }
        } else {
            counters = counters.map((c)=> maxCounter)
        }
    }
    return counters
    
}


function  solution1 (N,A) {
    let counters = new Array(N).fill(0)
    let maxCounter = 0
    let currentMax = 0

    A.forEach((value)=> {
        if (value > 0 && value <= N){
            if (maxCounter > counters[value - 1]) {
                //lazy write
                counters[value - 1] = maxCounter
            }
            counters[value-1] += 1
            if (counters[value - 1] > currentMax){
                currentMax = counters[value - 1]
            }
        } else {
            maxCounter = currentMax
        }
    })
    
    return counters.map(c => c < maxCounter ? maxCounter : c)    
}

const A = [3,4,4,6,1,4,4]
console.log(solution(5, A));
console.log(solution1(5, A));
