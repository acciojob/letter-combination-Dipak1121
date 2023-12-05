function letterCombinations(digits) {
  //Complete the function
	const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
	function generateCombinations(index, currentCombination, result) {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }
        const currentLetters = digitToLetters[digits[index]];
        for (let i = 0; i < currentLetters.length; i++) {
            generateCombinations(index + 1, currentCombination + currentLetters[i], result);
        }
    }
	if (!digits || digits.length === 0) {
        return [];
    }
    const result = [];
    generateCombinations(0, '', result);
    return result.sort();
}

module.exports = letterCombinations;
