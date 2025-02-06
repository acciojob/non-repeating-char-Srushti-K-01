function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {};
	for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
