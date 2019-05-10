function reverseTriangle(n) {
	let str = ''
	function _stars(curr){
		if(curr === 0) return
		for (let i = 0; i <= n-curr; i++) {
			str += " "
		}

		for (let j = 0; j < curr; j++) {
			str += '* '
		}
		console.log(str)
		str = ''
		_stars(curr-1)

	}
	_stars(n)
}

reverseTriangle(5)