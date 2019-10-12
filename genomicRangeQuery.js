/*
    S = 'CAGCCTA'
    impactFactors = {
        A : 1,
        C : 2,
        G : 3,
        T : 4,
    }

    P = [2, 5, 0]
    Q = [4, 5, 6]

*/

function isPowerOfTwo(N){
    return N / 2 % 2 === 0
}

function findNextPowOfTwo(N) {
    let power = 1
    while(power < N){
        power *= 2
    } 

    return power
}

function calcTreeSize(N){
    return isPowerOfTwo(N) ? N : findNextPowOfTwo(N)  * 2 - 1 
}


function constructTree (input, segTree, low, high, pos){
    if(low === high){
        segTree[pos] = input[low];
        return
    }
    const mid = Math.floor((low + high) / 2)

    // construct left side
    constructTree(input, segTree, low, mid, 2 * pos + 1)
    constructTree(input, segTree, mid + 1, high, 2 * pos + 2)
    segTree[pos] = Math.min(segTree[2 * pos + 1], segTree[2 * pos + 2])
}

function rangeMin(segTreeArr, qlow, qhigh, low, high, pos){
    const totalOverlap = qlow <= low && qhigh >= high;
    const noOverlap = high < qlow || low > qhigh;
    if (totalOverlap) return segTreeArr[pos]
    if (noOverlap) return Infinity

    const mid = Math.floor((low + high) / 2)

    return Math.min(
        rangeMin(segTreeArr, qlow, qhigh, low, mid, 2 * pos + 1), 
        rangeMin(segTreeArr, qlow, qhigh, mid + 1, high, 2 * pos + 2)
    )
}

function solution(S, P, Q){
    const impactFactors = {
        A : 1,
        C : 2,
        G : 3,
        T : 4,
    }

    const sImpactArr = S.split('').map(l => impactFactors[l])    
    const segTreeArr = new Array(calcTreeSize(sImpactArr.length)).fill(Infinity);
    
    constructTree(sImpactArr, segTreeArr, 0, sImpactArr.length - 1, 0)

    return P.map((el,idx) => rangeMin(segTreeArr, el, Q[idx], 0, sImpactArr.length - 1, 0));
}

const S = 'CAGCCTA'
const P = [2, 5, 0]
const Q = [4, 5, 6]

// const S = 'C'
// const P = [1]
// const Q = [1]
console.log(solution(S, P, Q));
