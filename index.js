// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

const capitalizeFirstWords = string => string.split(" ").map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join(" ");
console.log(capitalizeFirstWords('mickey mouse'));

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'


// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

const checkForMultipleEs = array => array.filter(ele => ele.toLowerCase().split("").filter(char => char === "e").length >= 1 && ele[0] !== "e");
console.log(checkForMultipleEs(['red', 'lindsay', 'equine', 'drip']));

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]
// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

function generateCharCount(string) {
    let obj = {};
    string.split("").forEach(ele => obj[ele] = (obj[ele] || 0) + 1, {});
    return obj;
}
console.log(generateCharCount("asciiaske"));
// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }