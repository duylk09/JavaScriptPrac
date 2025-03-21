// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj; // Return the value if it's not an object
//     }

//     if (Array.isArray(obj)) {
//         return obj.map(item => deepClone(item)); // Recursively clone array items
//     }

//     const clonedObj = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             clonedObj[key] = deepClone(obj[key]); // Recursively clone object properties
//         }
//     }

//     return clonedObj;
// }

// // Example usage:
// const original = {
//     name: "John",
//     age: 30,
//     hobbies: ["reading", "traveling"],
//     address: {
//         city: "New York",
//         zip: "10001"
//     }
// };

// const cloned = deepClone(original);
// cloned.address.city = "Los Angeles";
// cloned.hobbies.push("gaming");

// console.log(original); // Original object remains unchanged
// console.log(cloned); // Cloned object with modifications

// function findIntersection(arr1, arr2) {
//     // Your code here
//     const intersection = [];
//     for(const item of arr1) {
//         if(arr2.includes(item)) {
//             intersection.push(item);
//         }
//     }
//     return intersection;
// }

// // Test
// console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Expected output: [2, 3]
// console.log(findIntersection([5, 10, 15], [10, 15, 20])); // Expected output: [10, 15]

// function firstNonRepeatingChar(str) {
//     // Your code here
//     for(let char of str){
//         if(str.indexOf(char) === str.lastIndexOf(char)){
//             return char;
//         }
//     }
//     return null;
// }

// // Test
// console.log(firstNonRepeatingChar("aabbcde")); // Expected output: "c"
// console.log(firstNonRepeatingChar("aabb")); // Expected output: null

// function sumOfDigits(num) {
//     // Your code here
//     return num.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
// }

// // Test
// console.log(sumOfDigits(123)); // Expected output: 6 (1 + 2 + 3)
// console.log(sumOfDigits(987)); // Expected output: 24 (9 + 8 + 7)

// function removeFalsyValues(arr) {
//     // Your code here
//     return arr.filter(Boolean);
// }

// // Test
// console.log(removeFalsyValues([0, 1, false, 2, "", 3, "hello", null, undefined])); 
// // Expected output: [1, 2, 3, "hello"]
function countFrequency(arr) {
    // Your code here
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    },{})

}

// Test
console.log(countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"])); 
// Expected output: { apple: 3, banana: 2, orange: 1 }
