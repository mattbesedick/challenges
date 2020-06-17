/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const countingDuplicates = (text) => {
    const map = new Map();
    const textArr = text.toLowerCase().split('');
    let answer = 0
    for (let i in textArr) {
        console.log(textArr[i])
        if (!map.has(textArr[i])) {
            map.set(textArr[i], 1)
        } else {
            map.set(textArr[i], map.get(textArr[i]) + 1)
        }

    }

    for (let j of map) {
        if (j[1] > 1) {
            answer++
        }
    }

    return answer
}


console.log(countingDuplicates("Thisisatest"))