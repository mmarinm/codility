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


