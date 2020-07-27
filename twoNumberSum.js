//given an array of distinct integers and an integer representing a target sum, if any two numbers in the array equal the target sum, return those values otherwise return false

function twoNumberSum(array, targetSum) {
	// Write your code here.
	let results = []
	let map = new Map

	array.forEach((val, i) => map.set(val, i))


	for (let i = 0; i < array.length; i++) {
		let targetVal = targetSum - array[i]
		if (map.has(targetVal) && map.get(targetVal) !== i) {
			results.push(targetVal)
			results.push(array[i])
			return results
		}
	}
	return []
}
