function solution(X,A) {
    const N = A.length
    for (let i = 1; i <= N ; i++) {
        if(i > X) continue
        if(A.indexOf(i) === -1) return -1
    }
    return A.indexOf(X)
}