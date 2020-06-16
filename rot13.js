/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

function rot13(message) {
    //probably can get a solution without two maps here, just what I thought of right away.
    const lowercaseLetters = [['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4],
    ['f', 5], ['g', 6], ['h', 7], ['i', 8],
    ['j', 9], ['k', 10], ['l', 11], ['m', 12],
    ['n', 13], ['o', 14], ['p', 15], ['q', 16],
    ['r', 17], ['s', 18], ['t', 19], ['u', 20],
    ['v', 21], ['w', 22], ['x', 23], ['y', 24],
    ['z', 25]]

    const lowercaseMap = new Map(lowercaseLetters)

    const uppercaseLetters = [['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4],
    ['F', 5], ['G', 6], ['H', 7], ['I', 8],
    ['J', 9], ['K', 10], ['L', 11], ['M', 12],
    ['N', 13], ['O', 14], ['P', 15], ['Q', 16],
    ['R', 17], ['S', 18], ['T', 19], ['U', 20],
    ['V', 21], ['W', 22], ['X', 23], ['Y', 24],
    ['Z', 25]]

    const uppercaseMap = new Map(uppercaseLetters)
    const messageArray = message.split('')
    let find, cipherChar, findKey;
    let answer = []
    for (let i in messageArray) {

        //probably can use helper functions for some of these calculations/since they're repeating 
        if (messagArray[i] === messageArray[i].toUpperCase()) {
            find = uppercaseMap.get(messageArray[i])
            find = find + 13
            if (find > 25) {
                find = find - 26
                findKey = [...uppercaseMap.entries()].filter(([key, val]) => val === find)[0]
                cipherChar = findKey[0]
                answer.push(cipherChar)
            } else {
                findKey = [...uppercaseMap.entries()].filter(([key, val]) => val === find)[0]
                cipherChar = findKey[0]
                answer.push(cipherChar)

            }
        }
        else {
            find = lowercaseMap.get(messageArray[i])
            find = find + 13
            if (find > 25) {
                find = find - 26
                findKey = [...lowercaseMap.entries()].filter(([key, val]) => val === find)[0]
                console.log(findKey)
                cipherChar = findKey[0]
                answer.push(cipherChar)

            } else {
                findKey = [...lowercaseMap.entries()].filter(([key, val]) => val === find)[0]
                console.log(findKey)
                cipherChar = findKey[0]
                answer.push(cipherChar)
            }
        }
    }

    return answer.join('')

}

console.log(rot13('Test'))