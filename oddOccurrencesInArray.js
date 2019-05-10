/* constrains
N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/


/*
	1. XOR is commutative, which means
	X ^ Y = Y ^ X.
	2. XOR is assiciative, i.e.,
	X ^ (Y ^ Z) = (X ^ Y) ^ Z.
	3. For the truth values, as in the article,
	X ^ X = 0, 0 ^ X = X.
	With this properties, we can adapt a summation starategy similiar to the one of algebraic operations.
	Now we will assume a set [1, …, N + 1] (or an array), and evaluate the sum S of the elements by XOR operation. Then,
	S = 1 ^ 2 ^ … ^ N ^ (N +1) ^ 1 ^ 2 ^ … ^ N ^ (N +1).
	This might look wierd, but it has a useful charaterictics, that is;
	S = 1 ^ 2 ^ … ^ N ^ (N +1) ^ 1 ^ 2 ^ … ^ N ^ (N +1)
	= 1 ^ 1 ^ 2 ^ 2 ^ … N ^ N ^ (N + 1) ^ (N + 1)
	= 0.
	Back to our problem, we have an array A[] having N elements in [1, …, N + 1] and a missing elelent. Let the missing element M, then
	A[1] ^ A[2] ^ … ^ A[N] ^ M = 1 ^ 2 ^ … ^ N ^ (N +1),
	because any permutation in the array eventually holds all elements.
	Now the preperation for the answer is almost complete. To find M, we will modify the sum slightly.
	S = 1 ^ 2 ^ … ^ N ^ (N +1) ^ 1 ^ 2 ^ … ^ N ^ (N +1)
	= A[1] ^ A[2] ^ … ^ A[N] ^ M ^ 1 ^ 2 ^ … ^ N ^ (N +1)
	= (A[1] ^ A[2] ^ … ^ A[N] ^ 1 ^ 2 ^ … ^ N) ^ M ^(N +1)
	= (A[1] ^ 1 ^ A[2] ^ 2 ^ … ^ A[N] ^ N) ^ M ^ (N + 1).
	Since S = 0, we can get M as
	M = S ^ (A[1] ^ 1 ^ A[2] ^ 2 ^ … ^ A[N] ^ N) ^ (N + 1)
	= (A[1] ^ 1 ^ A[2] ^ 2 ^ … ^ A[N] ^ N) ^ (N + 1).
*/


const A = [9, 3, 9, 3, 9, 7, 9]
const B = [9, 3, 9, 3, 9, 7, 9, 7, 11]
const C = [11]
const D =  [1, 1, 1, 2, 2]


function solution(A) {
	let result = 0
	for (let i = 0; i < A.length; i ++) {
		result ^= A[i]		
	}
	console.log('result', result)
	return result

}

solution(A)
solution(B)
solution(C)
solution(D)