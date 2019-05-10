/*cases
[1,2,3,4]  		excpect 5
[1,3,4]  		excpect 2
[0,2,3] 		expect 1
[-1, -2 ,3] 	expect 1
[5, 10, 15]  	expect 1 
*/

function spmv(arr) {
	let min = 1
	arr.sort((a, b)=> a > b)

	for (let i = 0; i < arr.length; i++) {
		const curr = arr[i];
		const next = arr[i + 1];

		if(i===0 && curr > 1) break

		if(next - curr > 1){
			if(curr < 1){
				min = 1
				break
			}
			min = curr + 1
			break
		}
		
		min = curr + 1
	}
	console.log('min', min);
}

spmv([1,2,3,4])
spmv([1,3,4])
spmv([0,2,3] )
spmv([-1,-2,3])
spmv([5, 10, 15])