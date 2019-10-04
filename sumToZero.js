function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = []
    let sum = 0
    
    for (let i = 1; i <= N; i++) {            
            arr.push(i);
            sum +=i
    }

    const lastItem = arr.pop()
    const toDeduce = sum -lastItem
    arr.push(-toDeduce)
    return arr
}


console.log(solution(4));
