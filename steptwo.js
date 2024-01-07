// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(numsArr){
    for (let i = 0; i < numsArr.length; i++){
        for (let j = 0; j < numsArr.length; j++) {
            if (numsArr[i] + j === 0) {

             return true
            }
        }
    }
    return false
}
// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

console.log(addToZero([1, 2, 3, -2]))
// // -> True



// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str){
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] ){
                return false
            }
    }

}
return true
}


// For example:

console.log(hasUniqueChars("Monday"));
// // -> True

// hasUniqueChars("Moonday");
// // -> False
// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”


// Write a function to check a sentence to see if it is a pangram or not.

isPangram = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let strArr = str.toLowerCase().split("");
    let letters = [];
    strArr.forEach((letter) => {
      if (alphabet.indexOf(letter) > -1 && letters.indexOf(letter) === -1) {
        letters.push(letter);
      }
    });
    return letters.length === 26;
  };
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram("I like cats, but not mice"));

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False
// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
findLongestWord = (arr) => {
    let longestWord = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord.length;
  };
  
  console.log(findLongestWord(["hi", "hello"]));
  
// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5
// Be sure to add this file to your Github repo for this project.

// Extra Credit
// List out the space complexity of each solution in Step 2.