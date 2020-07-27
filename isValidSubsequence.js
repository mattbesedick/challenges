//given two non-empty arrays of integers, write a function thet determines whether the second array is a subsequence of the first one


function isValidSubsequence(array, sequence) {
	let match = 0
	let index = 0
	for (let i = 0; i < array.length; i++) {
		if (sequence[index] === array[i]) {
			index += 1
			match += 1
		}
	}
	return match === sequence.length
}

