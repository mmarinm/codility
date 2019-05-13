function solution(N) {
  
    const intToBin = (N >>> 0).toString(2)

	const binStr = intToBin
	let gapStart, gapEnd, currGap=0, maxGap=0;
	for(let i=0; i <= binStr.length; i++){
		if(parseInt(binStr[i]) === 1 && !gapStart){
			gapStart = true
			gapEnd = false
			continue
		}

		if(parseInt(binStr[i]) === 0 && gapStart){
			currGap += 1
		}

		//end of current gap
		if(currGap > 0 && parseInt(binStr[i]) === 1){
			if(currGap > maxGap){
				maxGap = currGap
			}
			currGap = 0
		}

	}
	if(maxGap > 0){
		return maxGap
	}
	else{
		return 0
	}

}


function solution2(N){
	let currGap = 0
	let maxGap = 0
	//skip tailing zero
	while (N > 0 && N%2 === 0) {
		N /= 2
	}

	while(N > 0){		
		let remainder = N % 2
		
		// start counting inside the gap
		if(remainder === 0){
			currGap += 1
		}
		//end of the gap
		else {
			if(currGap !== 0){
				if(currGap > maxGap){
					maxGap = currGap
					currGap = 0
				}
			}
		}
		N = Math.floor(N/2)
	}
	return maxGap
}


console.log(solution2(9)); // 1001 => gap = 2
console.log(solution2(15)); // 1111 => gap = 0
console.log(solution2(20)); // 10100 => gap = 1
console.log(solution2(32)); // 100000=> gap = 0
console.log(solution2(529)); // 1000010001 => gap = 4

function solution3(N) {
	const NtoBinArr = N.toString(2).split('1')
	//skip tailing zero
	NtoBinArr.pop()
	const filtered = NtoBinArr.filter((item)=> item !== '')
	if(filtered.length === 0) return 0
	return filtered.reduce((acc, curr) => acc > curr.length ? acc : curr.length,0)
}

console.log(solution3(9)); // 1001 => gap = 2
console.log(solution3(15)); // 1111 => gap = 0
console.log(solution3(20)); // 10100 => gap = 1
console.log(solution3(32)); // 100000=> gap = 0
console.log(solution3(529)); // 1000010001 => gap = 4




