// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
const findFirstVowelIndex = (inputString) => {
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            console.log(`The first vowel "${inputString[i]}" is at index ${i}.`);
            return i; // Optional: Return the index if you need it for further use
        }
    }

    console.log("No vowels found in the input string.");
    return -1; // Return -1 to indicate no vowels found in the string
};

// Example usage
findFirstVowelIndex("hello"); // Output: The first vowel "e" is at index 1.
findFirstVowelIndex("why"); // Output: The first vowel "y" is at index 1.
findFirstVowelIndex("rhythm"); // Output: No vowels found in the input string.

// Critique the code output. 
// I would personally change the function name to FirstVowelIndex to shorten it a little bit
// I wouldn't really want to change anything else reason being it's simple creating a conditional statement then using the includes method to see if any vowels are in the string.

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 