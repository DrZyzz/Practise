"use strict";

function dsMultofPfs(n1, n2) {
  // Helper function: Sum of the prime factors of n
  const primeFactorSum = function (n) {
    let primeFactors = new Map();

    // Handle factor of 2
    while (n % 2 === 0) {
      if (primeFactors.has(2)) {
        primeFactors.set(2, primeFactors.get(2) + 1);
      } else {
        primeFactors.set(2, 1);
      }
      n /= 2;
    }

    // Handle odd factors
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        if (primeFactors.has(i)) {
          primeFactors.set(i, primeFactors.get(i) + 1);
        } else {
          primeFactors.set(i, 1);
        }
        n /= i;
      }
    }

    // If n becomes a prime number greater than 2
    if (n > 2) {
      primeFactors.set(n, 1);
    }

    let sum = 0;
    primeFactors.forEach((value, key) => {
      sum += value * key;
    });

    return sum;
  };

  // Helper function: Sum of all the divisors of n
  const divisorsSumNum = function (n) {
    let divisors = [1]; // 1 is always a divisor

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisors.push(i);
        if (i !== n / i) {
          // avoid adding square roots twice
          divisors.push(n / i);
        }
      }
    }

    return divisors.reduce((acc, cur) => acc + cur, 0);
  };

  let result = [];

  for (let i = n1; i <= n2; i++) {
    if (primeFactorSum(i) === divisorsSumNum(i)) result.push(i);
  }

  return result;
}

// You can test the function with a range of numbers
console.log(dsMultofPfs(10, 100));

// function dsMultofPfs(n1, n2) {
//   const primeFactorSum = function (n) {
//     let primeFactors = new Map();

//     while (n % 2 === 0) {
//       if (primeFactors.has(2)) {
//         primeFactors.set(2, primeFactors.get(2) + 1);
//       } else {
//         primeFactors.set(2, 1);
//         n /= 2;
//       }
//     }
//     for (let i = 3; i < Math.sqrt(n); i += 2) {
//       if (primeFactors.has(i)) {
//         primeFactors.set(i, primeFactors.get(i) + 1);
//       } else {
//         primeFactors.set(i, 1);
//         n /= i;
//       }
//     }
//     if (n > 2 && !primeFactors.has(n)) {
//       primeFactors.set(n);
//     }

//     let sum = 0;
//     primeFactors.forEach((value, key) => {
//       sum += value * key;
//     });
//     return sum;
//   };

//   const divisorsSumNum = function (n) {
//     let divisors = [];

//     for (let i = 1; i < Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         divisors.push(i);
//       }
//       if (n / i === i) {
//         divisors.push(i);
//       }
//       if (n / i !== i) {
//         divisors.push(n);
//         divisors.push(i);
//       }
//     }
//     return divisors.reduce((acc, cur) => acc + cur, 0);
//   };

//   let result = [];

//   for (let i = n1; i <= n2; i++) {
//     if (primeFactorSum(i) === divisorsSumNum(i)) result.push(i);
//   }

//   return result;
// }

// console.log(dsMultofPfs(10, 100));
// function rgb(r, g, b) {
//   r = Math.min(255, Math.max(0, r));
//   g = Math.min(255, Math.max(0, g));
//   b = Math.min(255, Math.max(0, b));

//   const hexR = r.toString(16).padStart(2, "0");
//   const hexG = g.toString(16).padStart(2, "0");
//   const hexB = b.toString(16).padStart(2, "0");

//   const hexColor = `#${hexR}${hexG}${hexB}`;

//   return hexColor;
// }

// function findOutlier(integers) {
//   let filtered = integers.filter((el) => el % 2 === 0);
//   if (filtered.length === 1) return filtered[0];
//   return integers.find((el) => el % 2 !== 0);
//   //your code here
// }

// function createPhoneNumber(numbers) {
//   let result = "(";

//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//     if (i === 2) {
//       result += ") ";
//     } else if (i === 5) {
//       result += "-";
//     }
//   }

//   return result;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function penalty(a_list) {
//   a_list.sort((a, b) => b - a);
//   let result = "";
//   for (let i = 0; i < a_list.length; i++) {
//     let number = a_list[i];
//     result += `${number}`;
//   }
//   return result;
// }
// function solution(number) {
//   let sum = 0;
//   for (let i = 3; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// f = (inp) => {
//   let count = 0;
//   let sum = 0;
//   let i = 1;
//   while (sum < inp) {
//     sum += Math.pow(i, 3);
//     i++;
//     count++;
//   }
//   if (sum === inp) return count;
//   return 0;
// };

// function solution(str) {
//   let resultArray = [];
//   const letters = str.split("");
//   if (letters.length % 2 === 0) {
//     for (let i = 0; i < letters.length - 1; i += 2) {
//       const result = `${letters[i]}${letters[i + 1]}`;
//       resultArray.push(result);
//     }
//     return resultArray;
//   } else {
//     for (let i = 0; i < letters.length; i++) {
//       if (i === letters.length) {
//         resultArray.push(`${letters[i]}_`);
//         return resultArray;
//       }
//       const result = `${letters[i]}${letters[i + 1]}`;
//       resultArray.push(result);
//     }
//   }
// }

// function spinWords(string) {
//   const words = string.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (word.length < 5) {
//       result += `${word} `;
//       continue;
//     }
//     let reversedWord = "";
//     for (let j = word.length; j >= 0; j--) {
//       reversedWord += word.charAt(j);
//     }
//     result += `${reversedWord} `;
//   }
//   return result.trimEnd();
//   //TODO Have fun :)
// }

// var sumOfMultiples = function (n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) sum += i;
//     continue;
//   }
//   return sum;
// };

// var checkSubarraySum = function (nums, k) {
//   let prev = nums[0];
//   let current;
//   for (let i = 1; i < nums.length; i++) {
//     current = nums[i];
//     let tempSolution = [prev, current];
//     if (prev + (current % k) === 0) return true;
//     if (
//       nums.slice(i + 1).reduce((acc, cur) => {
//         tempSolution.push(current);
//         acc + cur;
//         if (acc % k === 0) return true;
//       }, prev + current)
//     )
//       return true;
//     prev = current;
//   }
//   return false;
// };

// var isPalindrome = function (x) {
//   const getDigits = function (number) {
//     let num = number;
//     let digits = [];
//     while (num > 0) {
//       digits.push(Math.floor(num % 10));
//       num = Math.floor(num / 10);
//     }
//     return +digits.join("");
//   };
//   return getDigits(x) === x ? true : false;
// };

// var findMedianSortedArrays = function (nums1, nums2) {
//   const mergedArray = nums1.concat(nums2);
//   console.log(mergedArray);
//   mergedArray.sort((a, b) => a - b);
//   const median = Math.floor(mergedArray.length / 2);
//   if (mergedArray.length % 2 === 0) {
//     return (mergedArray[median] + mergedArray[median - 1]) / 2;
//   } else return mergedArray[median];
// };

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
//   // Go for it
// }

// console.log(reverseWords("This is an example!"));

// function findLongest(array) {
//   let longest = Number.MIN_VALUE;
//   let indexOfLongest;

//   for (const [i, number] of array.entries()) {
//     let num = number;
//     const digits = [];

//     while (num > 0) {
//       digits.push(Math.floor(num % 10));
//       num = Math.floor(num / 10);
//     }

//     if (digits.length > longest) {
//       longest = digits.length; // Update the longest length
//       indexOfLongest = i;
//     }
//   }

//   return array[indexOfLongest];
// }
// function sumCubes(n) {
//   let number = 1;
//   let sum = 0;
//   while (number <= n) {
//     sum += Math.pow(number, 3);
//     number++;
//   }
//   return sum;
//   // ...
// }
// console.log(sumCubes(2));

// function findMultiples(integer, limit) {
//   const multiplications = [];
//   for (let i = integer; i <= limit; i += integer) {
//     multiplications.push(i);
//   }
//   return multiplications;
//   //your code here
// }

// function sumArray(array) {
//   if (!Array.isArray(array) || array.length === 0) return 0;
//   let sum = 0;
//   array.sort((a, b) => a - b);
//   for (let i = 1; i < array.length - 1; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// console.log(sumArray([6, 2, 1, 8, 10]));

// function sumOfDifferences(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return 0;
//   arr.sort((a, b) => b - a);
//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     const bigNumber = arr[i];
//     const smallNumber = arr[i + 1];
//     sum += bigNumber - smallNumber;
//   }
//   return sum;
// }

// function wordsToMarks(string) {
//   let sum = 0;
//   for (const letter of string.toLowerCase()) {
//     sum += letter.charCodeAt(0) - 96;
//   }
//   return sum;
// }

// function greet(language) {
//   const database = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso",
//   };
//   return database.hasOwnProperty(language) ? database[language] : "Welcome";
// }
// function remainder(n, m) {
//   if (n === 0 && n > m) {
//     return 0; // Return NaN if either n or m is zero
//   } else if (n === 0) return NaN;
//   if (m === 0 && m > n) {
//     return 0; // Return NaN if either n or m is zero
//   } else if (m === 0) return NaN;

//   if (n > m) {
//     return n % m; // Return the remainder of n divided by m if n is greater than m
//   } else if (m > n) {
//     return m % n; // Return the remainder of m divided by n if m is greater than n
//   } else {
//     return 0; // Return 0 if n and m are equal
//   }
// }

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   if (dadYearsOld > 2 * sonYearsOld) {
//     return dadYearsOld - 2 * sonYearsOld;
//   } else if (dadYearsOld < 2 * sonYearsOld) {
//     return 2 * sonYearsOld - dadYearsOld;
//   } else return 0;
//   // your code here
// }

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) sum += arr[i];
//     continue;
//   }
//   return sum;
// }

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

// function stringClean(s) {
//   return s.replace(/\d/g, "");
// }

// function correct(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     const letter = string.charAt(i);
//     switch (letter) {
//       case "1":
//         result += "I";
//         break;
//       case "5":
//         result += "S";
//         break;
//       case "0":
//         result += "O";
//         break;
//       default:
//         result += letter;
//     }
//   }
//   return result;
//   // your code here
// }

// function toBinary(n) {
//   let result = [];
//   let number = n;
//   while (number > 0) {
//     result.push(Math.ceil(number % 2));
//     number = Math.floor(number / 2);
//   }
//   return Number(result.reverse().join(""));
// }

// function distinct(a) {
//   let removed = [];
//   for (let i = 0; i < a.length; i++) {
//     if (removed.includes(a[i])) continue;
//     else removed.push(a[i]);
//   }
//   return removed;
// }

// function reverseLetter(str) {
//   return str
//     .replace(/[^a-zA-Z]/g, "")
//     .split("")
//     .reverse()
//     .join("");
//   //coding and coding..
// }

// function replace(s) {
//   const vowels = "aeiouAEIOU";
//   const vowelArrays = vowels.split("");
//   let newString = "";
//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);
//     if (vowelArrays.includes(char)) {
//       newString += "!";
//       continue;
//     }
//     newString += char;
//   }
//   console.log(vowelArrays);
//   return newString;
//   //coding and coding....
// }

// function doubleChar(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += str.charAt(i);
//     newStr += str.charAt(i);
//   }
//   return newStr;
//   // Your code here
// }

// function squareSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     square = numbers[i] * numbers[i];
//     sum += square;
//   }
//   return sum;
// }

// function doubleInteger(i) {
//   // i will be an integer. Double it and return it.
//   return i * 2;
// }

// function nameShuffler(str) {
//   //Shuffle It
//   return str.split(" ").reverse().join(" ");
// }

// function problem(x) {
//   if (typeof x === "string") {
//     return "Error";
//   } else if (isNaN(x)) {
//     return "Error";
//   } else {
//     return x * 50 + 6;
//   }
// }

// function getGrade(s1, s2, s3) {
//   const averageOfThree = (s1 + s2 + s3) / 3;
//   let grade;
//   switch (true) {
//     case averageOfThree >= 90 && averageOfThree <= 100:
//       grade = "A";
//       break;
//     case averageOfThree >= 80 && averageOfThree < 90:
//       grade = "B";
//       break;
//     case averageOfThree >= 70 && averageOfThree < 80:
//       grade = "C";
//       break;
//     case averageOfThree >= 60 && averageOfThree < 70:
//       grade = "D";
//       break;
//     case averageOfThree >= 0 && averageOfThree < 60:
//       grade = "F";
//       break;
//     default:
//       grade = undefined;
//       break;
//   }
//   return grade;
// }

// String.prototype.toAlternatingCase = function () {
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     const char = this[i];
//     if (char === char.toLowerCase()) {
//       result += char.toUpperCase();
//     } else {
//       result += char.toLowerCase();
//     }
//   }
//   return result;
//   // Define your method here :)
// };

// function enough(cap, on, wait) {
//   // your code here
//   const remainingSpace = cap - on;
//   if (remainingSpace >= wait) {
//     return 0;
//   } else {
//     return wait - remainingSpace;
//   }
// }

// function getAge(inputString) {
//   // return the girl's correct age as an integer. Happy coding :)
//   const answer = inputString.split(" ");
//   return Number(answer[0]);
// }

// var min = function (list) {
//   let min = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] < min) {
//       min = list[i];
//     }
//   }
//   return min;
// };

// var max = function (list) {
//   let max = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] > max) {
//       max = list[i];
//     }
//   }
//   return max;
// };

// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return Math.max(...list);
// };

// function combat(health, damage) {
//   const remainingHealth = health - damage;
//   if (remainingHealth <= 0) return 0;
//   else return remainingHealth;
//   // Write your code here
// }

// // // // //  7 KYU

// function accum(s) {
//   const seperatedString = s.toLowerCase().split("");
//   const answer = seperatedString.map((char, idx) => {
//     let smallString = "";
//     for (let i = 1; i < idx + 1; i++) smallString += char;
//     return char.toUpperCase() + smallString;
//   });

//   return answer.join("-"); // your code
// }

// function squareDigits(num) {
//   let number = num;
//   const digits = [];
//   while (number > 0) {
//     digits.push(Math.ceil(number % 10));
//     number = Math.floor(number / 10);
//   }
//   digits.reverse();

//   const totalPowered = digits.reduce((acc, digit) => (acc += digit ** 2), "");
//   console.log(totalPowered);
//   return Number(totalPowered);
// }

// function alphabetWar(fight) {
//   let leftSidePower = 0;
//   let rightSidePower = 0;
//   for (let i = 0; i < fight.length; i++) {
//     let char = fight.charAt(i);
//     switch (char) {
//       case "w":
//         leftSidePower += 4;
//         break;
//       case "p":
//         leftSidePower += 3;
//         break;
//       case "b":
//         leftSidePower += 2;
//         break;
//       case "s":
//         leftSidePower += 1;
//         break;
//       case "m":
//         rightSidePower += 4;
//         break;
//       case "q":
//         rightSidePower += 3;
//         break;
//       case "d":
//         rightSidePower += 2;
//         break;
//       case "z":
//         rightSidePower += 1;
//         break;
//     }
//   }
//   if (leftSidePower > rightSidePower) {
//     return "Left side wins!";
//   } else if (rightSidePower > leftSidePower) {
//     return "Right side wins!";
//   } else {
//     return "Let's fight again!";
//   }
// }

// function evaporator(content, evap_per_day, threshold) {
//   let day = 0;
//   let ing = content;
//   while (ing >= (content / 100) * threshold) {
//     ing /= 100;
//     ing *= 100 - evap_per_day;
//     day++;
//   }
//   return day;

// function friend(friends) {
//   const allFriends = friends.filter((friend) => friend.length === 4);
//   return allFriends;
// }

// function flattenAndSort(array) {
//   let resultArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let insideArray = array[i];
//     if (insideArray.length > 0) {
//       resultArray.push(...insideArray);
//     } else continue;
//   }
//   // console.log(resultArray);
//   // Good luck, brave code warrior!
//   return resultArray.sort((a, b) => a - b);
// }

// function sumOfMinimums(arr) {
//   let sum = 0;

//   const findTheMinAndSum = (arr) => {
//     let min;
//     arr.sort((a, b) => a - b);
//     sum += arr[0];
//   };

//   for (let i = 0; i < arr.length; i++) {
//     const insideArray = arr[i];
//     findTheMinAndSum(insideArray);
//   }

//   return sum;
//   // your code here
// }

// function sumOfMinimums(arr) {
//   return arr.reduce((p, c) => p + Math.min(...c), 0);
// }

// function sortByLength(array) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   return array.sort((a, b) => a.length - b.length);
// }

// function removeSmallest(numbers) {
//   if (numbers === []) return [];

//   let min = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   const removedMin = [...numbers];
//   removedMin.splice(removedMin.indexOf(min), 1);
//   return removedMin;
// }

// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) return true;
//   return false;
// }

// function solution(nums) {
//   if (nums === null) return [];
//   else if (nums.length > 0) return nums.sort((a, b) => a - b);
//   else return [];
// }

// function getDivisorsCnt(n) {
//   let count = 0;
//   for (let divisor = 1; divisor <= Math.sqrt(n); divisor++) {
//     if (n % divisor === 0) {
//       count += 2; // Increment count for both divisor and its corresponding pair
//       if (divisor === Math.sqrt(n)) {
//         count--; // If divisor is a perfect square, decrement count to avoid double counting
//       }
//     }
//   }
//   return count;
// }

// function isIsogram(str) {
//   str = str.toLowerCase();
//   let checker = [];
//   for (let i = 0; i < str.length; i++) {
//     if (checker.includes(str.charAt(i))) {
//       return false;
//     }
//     checker.push(str.charAt(i));
//   }
//   return true;

//   //...
// }

// function gimme(triplet) {
//   let smallest = triplet[0];
//   let biggest = triplet[0];
//   let middle = 0;
//   for (let i = 1; i < triplet.length; i++) {
//     if (triplet[i] > biggest) biggest = triplet[i];
//     else if (triplet[i] < smallest) smallest = triplet[i];
//   }
//   for (let i = 0; i < triplet.length; i++) {
//     if (triplet[i] < biggest && triplet[i] > smallest) middle = triplet[i];
//   }
//   return triplet.indexOf(middle);
// }

// var isAnagram = function (test, original) {
//   let counter1 = new Map();
//   let counter2 = new Map();

//   for (let i = 0; i < test.length; i++) {
//     const letter = test[i].toLowerCase();
//     if (counter1.has(letter)) {
//       counter1.set(letter, counter1.get(letter) + 1);
//     } else {
//       counter1.set(letter, 1);
//     }
//   }

//   for (let i = 0; i < original.length; i++) {
//     const letter = original[i].toLowerCase();
//     if (counter2.has(letter)) {
//       counter2.set(letter, counter2.get(letter) + 1);
//     } else {
//       counter2.set(letter, 1);
//     }
//   }

//   if (counter1.size !== counter2.size) {
//     return false;
//   }

//   for (let [key, value] of counter1) {
//     if (!counter2.has(key) || counter2.get(key) !== value) {
//       return false;
//     }
//   }

//   return true;
// };

// const isAnagram = (test, original) => {
//   const sortedTest = test.toLowerCase().split("").sort().join("");
//   const sortedOriginal = original.toLowerCase().split("").sort().join("");
//   return sortedTest === sortedOriginal;
// };

// function stray(numbers) {
//   const counter = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (counter.has(number)) {
//       counter.set(number, counter.get(number) + 1);
//     } else {
//       counter.set(number, 1);
//     }
//   }

//   for (let [key, value] of counter) {
//     if (value % 2 !== 0) {
//       return key;
//     }
//   }
// }

// function minMax(arr) {
//   if (arr.length === 1) {
//     return [arr[0], arr[0]];
//   }
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let currentPrice = arr[i];
//     if (currentPrice > max) max = currentPrice;
//     if (currentPrice < min) min = currentPrice;
//   }
//   return [min, max]; // fix me!
// }

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// function oddOrEven(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     let number = array[i];
//     sum += number;
//   }
//   if (sum % 2 === 0) return "even";
//   return "odd";
//   //enter code here
// }

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
//   return (
//     enteredCode === correctCode &&
//     Date.parse(expirationDate) >= Date.parse(currentDate)
//   );
// }

// var number = function (array) {
//   if (array === []) return [];
//   let arrayNew = new Array();
//   for (let i = 0; i < array.length; i++) {
//     arrayNew.push(`${i + 1}: ${array[i]}`);
//   }
//   return arrayNew;
//   //your awesome code here
// };

// var capitals = function (word) {
//   const answer = new Array();
//   for (let i = 0; i < word.length; i++) {
//     if (word.charAt(i) === word.charAt(i).toUpperCase()) {
//       answer.push(word.indexOf(word.charAt(i)));
//     }
//   }
//   return answer;
//   // Write your code here
// };

// function openOrSenior(data) {
//   const answerArray = new Array();
//   for (let i = 0; i < data.length; i++) {
//     const tempArray = data[i];
//     answerArray.push(
//       tempArray[0] >= 55 && tempArray[1] > 7 ? "Senior" : "Open"
//     );
//   }
//   return answerArray;
//   // ...
// }

// function findShort(s) {
//   let min = Number.MAX_VALUE;
//   const seperated = s.split(" ");
//   for (let i = 0; i < seperated.length; i++) {
//     const lenghtOfTheWord = seperated[i].length;
//     if (lenghtOfTheWord < min) min = lenghtOfTheWord;
//   }
//   return min;
// }

// function isValidIP(str) {
//   return str.split(".").filter(isValidIPv4).length === 4;
// }

// function isValidIPv4(num) {
//   return (
//     +num >= 0 &&
//     +num <= 255 &&
//     /^\d{1,3}$/.test(num) &&
//     !(/^0/.test(num) && num.length > 1)
//   );
// }

// function nbDig(n, d) {
//   let count = 0;

//   for (let number = 0; number <= n; number++) {
//     const square = number * number;
//     const digits = String(square).split("");

//     count += digits.filter((digit) => digit === String(d)).length;
//   }

//   return count;
// }

// function checkExam(array1, array2) {
//   let point = 0;
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === "" || array2[i] === "") continue;
//     if (array1[i] !== array2[i]) {
//       point--;
//     } else {
//       point += 4;
//     }
//   }
//   return point < 0 ? 0 : point;
//   // good luck
// }

// function sumDigits(number) {
//   number = Math.abs(number); // Convert negative number to positive
//   const digits = [];
//   let sum = 0;
//   while (number > 0) {
//     digits.push(number % 10);
//     number = Math.floor(number / 10);
//   }
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i];
//   }
//   return sum;
// }

// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a, b) => a - b);
//   console.log(numbers);
//   return numbers[0] + numbers[1];
//   //Code here
// }

// function evenNumbers(array, number) {
//   const filtered = array.filter((num) => num % 2 === 0);
//   // const repetitions = Math.floor(number / filtered.length);
//   // const remainder = number % filtered.length;

//   const resultArray = [];
//   console.log(filtered);
//   // Add the full repetitions of the filtered array
//   for (let i = filtered.length - 1; i >= 0; i--) {
//     resultArray.push(filtered[i]);
//     if (resultArray.length === number) break;
//   }

//   return resultArray.reverse();
// }

// function largestPairSum(numbers) {
//   let total = -Infinity; // Initialize with smallest possible negative number
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       let sum = numbers[i] + numbers[j];
//       if (sum > total) total = sum;
//     }
//   }
//   return total;
// }
// function vowelIndices(word) {
//   var arr = [];
//   for (var i = 0; i < word.length; i++) {
//     if (/[aeioyu]/i.test(word[i])) {
//       arr.push(i + 1);
//     }
//   }
//   return arr;
// }
// // // // 6 KYU

// const wovels = new Map();
// const wovelsReversed = new Map();
// const wovs = ["a", "e", "i", "o", "u"];
// for (const [i, wov] of wovs.entries()) {
//   wovels.set(wov, i + 1);
// }
// for (const [i, wov] of wovs.entries()) {
//   wovelsReversed.set(i + 1, wov);
// }
// function encode(string) {
//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     const char = string.charAt(i);
//     if (wovels.has(char)) {
//       result += wovels.get(char);
//     } else result += char;
//   }
//   console.log(result);
//   return result;
// }

// function decode(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     const char = string.charAt(i);
//     if (wovelsReversed.has(Number(char))) {
//       result += wovelsReversed.get(Number(char));
//     } else result += char;
//   }
//   return result;
// }

// function solve(s) {
//   const sep = s.split(/[aeiou]/);
//   let sum = 0;
//   for (let i = 0; i < sep.length; i++) {
//     let tempSum = 0;
//     let temp = sep[i];
//     for (let j = 0; j < temp.length; j++) {
//       const char = temp[j];
//       tempSum += char.charCodeAt(0) - 96;
//     }
//     tempSum > sum ? (sum = tempSum) : sum;
//     console.log(tempSum);
//   }
//   console.log(sum);
//   return sum;
// }

// function sortArray(array) {
//   if (!Array.isArray(array) || array.length === 0) array;
//   const oddsOnly = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
//   const result = [];
//   let j = 0;
//   for (let i = 0; i < array.length; i++) {
//     let number = array[i];
//     if (number % 2 !== 0) {
//       result.push(oddsOnly[j]);
//       j++;
//     } else result.push(number);
//   }
//   return result;
//   // Return a sorted array.
// }

// function meeting(s) {
//   const separated = s.toUpperCase().split(/[;:]/g);
//   const grouped = [];
//   for (let i = 0; i < separated.length - 1; i += 2) {
//     const firstName = separated[i];
//     const lastName = separated[i + 1];
//     grouped.push([firstName, lastName]);
//   }
//   const sorted = grouped.sort((a, b) => {
//     const lastNameComparison = a[1].localeCompare(b[1]);
//     return lastNameComparison === 0
//       ? a[0].localeCompare(b[0])
//       : lastNameComparison;
//   });
//   let result = "";
//   for (let i = 0; i < sorted.length; i++) {
//     result += `(${sorted[i][1]}, ${sorted[i][0]})`;
//   }
//   console.log(result);
//   return result;
// }

// Example usage:
// meeting("John:Doe;Peter:Parker;Mary:Jane;John:Smith;");

// function alphabetPosition(text) {
//   const seperated = text
//     .toLowerCase()
//     .split("")
//     .filter((el) => el.match(/[a-z]/g));
//   const alphabet = seperated.map((char) => char.charCodeAt(char) - 96);
//   return alphabet.join(" ");
// }

// function tribonacci(signature, n) {
//   if (signature.length >= n) return signature.slice(0, n);
//   const resultArray = [...signature];
//   for (let i = 2; true; i++) {
//     resultArray.push(resultArray[i] + resultArray[i - 1] + resultArray[i - 2]);
//     if (resultArray.length === n) break;
//   }
//   return resultArray;

//   //your code here
// }

// var uniqueInOrder = function (iterable) {
//   let prevEl;
//   let curEl;
//   const unique = [];
//   for (let i = 0; i < iterable.length; i++) {
//     curEl = iterable[i];
//     if (prevEl === curEl) continue;
//     unique.push(curEl);
//     prevEl = curEl;
//   }
//   return unique;
//   //your code here - remember iterable can be a string or an array
// };

// function comp(a, b) {
//   if (a === null || b === null || !Array.isArray(a) || !Array.isArray(b)) {
//     return false;
//   }

//   const squaredA = a.map((num) => num * num);
//   squaredA.sort((a, b) => a - b);
//   b.sort((a, b) => a - b);

//   for (let i = 0; i < squaredA.length; i++) {
//     if (squaredA[i] !== b[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function order(words) {
//   // We are giving a string, divide it to an array for each word
//   // Going over the array of words store the number somehow
//   // looking at which word should be where reorganize the string and join
//   const seperated = words.split(" ");
//   const sortedArray = new Array();
//   for (let i = 0; i < seperated.length; i++) {
//     const letters = seperated[i].split("");
//     for (let j = 0; j < letters.length; j++) {
//       const number = letters[j];
//       if (!isNaN(number)) {
//         sortedArray[number - 1] = seperated[i];
//       }
//     }
//   }
//   const finalString = sortedArray.join(" ");
//   return finalString;
//   // ...
// }

// function encrypt(text, n) {
//   if (text !== null && text !== "") {
//     // Updated condition to check for null and empty string
//     let separated = text.split("");
//     for (let i = 0; i < n; i++) {
//       const oddIndexed = [];
//       const evenIndexed = [];
//       for (let j = 0; j < separated.length; j++) {
//         if (j % 2 !== 0) oddIndexed.push(separated[j]);
//         else evenIndexed.push(separated[j]);
//       }
//       separated = oddIndexed.concat(evenIndexed);
//     }
//     return separated.join("");
//   }
//   return text;
// }

// function decrypt(encryptedText, n) {
//   // Divide the given string to half
//   // put one from the even indexed halh then from the next one
//   if (encryptedText !== null && encryptedText !== "") {
//     let seperated = encryptedText.split("");
//     const half = Math.ceil(seperated.length / 2);
//     for (let i = 0; i < n; i++) {
//       let evenIndexed;
//       let oddIndexed;
//       if (seperated.length % 2 !== 0) {
//         evenIndexed = seperated.slice(half - 1);
//         oddIndexed = seperated.slice(0, half - 1);
//       } else {
//         evenIndexed = seperated.slice(half);
//         oddIndexed = seperated.slice(0, half);
//       }
//       let concatinatedArray = [];
//       for (let j = 0; j < seperated.length / 2; j++) {
//         concatinatedArray.push(evenIndexed[j]);
//         concatinatedArray.push(oddIndexed[j]);
//       }
//       if (seperated.length % 2 !== 0) {
//         concatinatedArray.push(oddIndexed[seperated.length / 2 + 1]);
//       }
//       seperated = concatinatedArray;
//     }
//     return seperated.join("");
//   }
//   return encryptedText;
// }

// const multiplicationTable = function (size) {
//   let beginning = 1;
//   let resultArray = [];
//   while (beginning <= size) {
//     let tempArray = [];
//     for (let i = beginning; i <= size; i++) {
//       for (let j = 1; j <= size; j++) {
//         tempArray.push(i * j);
//       }
//       break;
//     }
//     resultArray.push(tempArray);
//     beginning++;
//   }
//   return resultArray;
//   // insert code here
// };

// function findNb(m) {
//   // Given m is a number
//   let number = 1;
//   let sum = 0;
//   while (sum <= m) {
//     sum += Math.pow(number, 3);
//     if (sum === m) return number;
//     number++;
//   }
//   // your code
//   return -1;
// }

// function revrot(str, sz) {
//   if (sz <= 0 || !str || sz > str.length) return "";

//   const sumCubes = (chunk) =>
//     chunk.split("").reduce((sum, digit) => (sum += digit ** 3), 0);
//   const reverse = (chunk) => chunk.split("").reverse().join("");
//   const rotate = (chunk) => chunk.slice(1) + chunk.slice(0, 1);

//   const chunks = [];

//   for (let i = 0; i < str.length; i += sz) {
//     let chunk = str.slice(i, i + sz);

//     if (chunk.length < sz) continue;

//     chunk = sumCubes(chunk) % 2 ? rotate(chunk) : reverse(chunk);

//     chunks.push(chunk);
//   }

//   return chunks.join("");
// }

// function titleCase(title, minorWords) {
//   const seperated = title.split(" ");
//   let result = [];
//   const firstLetterToUpperCase = (word) => {
//     return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//   };
//   for (let i = 0; i < seperated.length; i++) {
//     let word = seperated[i];
//     if (i === 0) {
//       result.push(firstLetterToUpperCase(word));
//       continue;
//     } else if (minorWords) {
//       if (
//         minorWords.toLowerCase().split(" ").includes(word.toLowerCase()) ||
//         minorWords
//           .toLowerCase()
//           .split(" ")
//           .includes(firstLetterToUpperCase(word))
//       ) {
//         result.push(word.toLowerCase());
//         continue;
//       } else {
//         result.push(firstLetterToUpperCase(word));
//         continue;
//       }
//     }
//     result.push(firstLetterToUpperCase(word));
//   }
//   return result.join(" ");
// }

// function bouncingBall(h, bounce, window) {
//   if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
//     return -1;
//   }

//   let count = 0;
//   let height = h;
//   while (height > window) {
//     count++; // Increment count for each bounce up
//     height *= bounce; // Update the height after the bounce
//     if (height > window) {
//       count++; // Increment count for each bounce down
//     }
//   }
//   return count;

// function dataReverse(data) {
//   // We are given an array of bits
//   // Seperate with the length of 8 lengths
//   // Your code here
//   const sortedArray = [];
//   for (let i = 0; i < data.length; i += 8) {
//     let temp = data.slice(i, i + 8);
//     sortedArray.push(temp);
//   }
//   sortedArray.reverse();
//   const resultArray = sortedArray.reduce(
//     (result, current) => result.concat(current),
//     []
//   );
//   return resultArray;
// }

// function solution(number) {
//   if (number < 0) return 0;

//   let sum = 0;
//   for (let i = 3; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// function stockList(listOfArt, listOfCat) {
//   let categories = new Map();
//   listOfCat.forEach((element) => {
//     categories.set(element, 0);
//   });
//   listOfArt.forEach((element) => {
//     console.log(element);
//     const sep = element.split(" ");
//     console.log(sep);
//     for (const [key, value] of categories.entries()) {
//       if (element[0].startsWith(key))
//         categories.set(key, categories.get(key) + Number(sep[1]));
//     }
//   });
//   let temp = [];
//   for (const [key, value] of categories.entries())
//     temp.push(`(${key} : ${value})`);
//   const allValuesAreZero = temp.every((entry) => entry.endsWith(": 0)"));
//   if (allValuesAreZero) {
//     return "";
//   }
//   return temp.join(" - ");
// }

// function stockList(listOfArt, listOfCat) {
//   if (!listOfArt.length || !listOfCat.length) return "";
//   return listOfCat
//     .map((w) => {
//       const s = listOfArt.reduce(
//         (a, b) => a + (b.charAt(0) === w ? +b.split(" ")[1] : 0),
//         0
//       );
//       return `(${w} : ${s})`;
//     })
//     .join(" - ");
// }

// function thirt(n) {
//   const seq = [];
//   for (let i = 0; true; i++) {
//     const reminder13 = 10 ** i % 13;
//     if (seq[0] === reminder13) break;
//     seq.push(reminder13);
//   }
//   let number = n;
//   const digits = [];
//   while (number > 0) {
//     digits.push(Math.ceil(number % 10));
//     number = Math.floor(number / 10);
//   }
//   let counter = 0;
//   let sum = 0;

//   for (let i = 0; i < digits.length; i++) {
//     if (counter === seq.length) counter = 0;
//     sum += digits[i] * seq[counter];
//     counter++;
//   }
//   if (sum === n) {
//     return sum;
//   }
//   return thirt(sum);
// }

// function thirt(n) {
//   const nums = [1, 10, 9, 12, 3, 4];
//   var sum = ("" + n)
//     .split("")
//     .reverse()
//     .reduce((sum, v, i) => sum + v * nums[i % nums.length], 0);
//   return sum === n ? n : thirt(sum);
// }

// function queueTime(customers, tills) {
//   // Initialize an array with the same length as the number of tills,
//   // representing the time each till will finish processing a customer.
//   const tillsArray = new Array(tills).fill(0);

//   // Iterate through each customer and assign them to the till with the earliest available time.
//   customers.forEach((customerTime) => {
//     const earliestTill = tillsArray.indexOf(Math.min(...tillsArray));
//     tillsArray[earliestTill] += customerTime;
//   });

//   // The total time it takes is the maximum value in the tillsArray, as it represents
//   // the time when the last customer finishes processing.
//   return Math.max(...tillsArray);
// }

// // // // // 5 KYU

// function productFib(prod) {
//   let curEl = 1;
//   let prevEl = 0;

//   while (curEl * prevEl <= prod) {
//     const temp = prevEl;
//     if (curEl * prevEl === prod) {
//       return [prevEl, curEl, true];
//     }
//     prevEl = curEl;
//     curEl += temp;
//   }
//   return [prevEl, curEl, false];
//   // ...
// }

// function rot13(message) {
//   const alphabetArray = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let result = "";
//   for (let i = 0; i < message.length; i++) {
//     const char = message.charAt(i);
//     const letterRegex = /^[a-zA-Z]$/;
//     if (letterRegex.test(char)) {
//       if (char === char.toUpperCase())
//         result +=
//           alphabetArray[
//             (alphabetArray.indexOf(char.toLowerCase()) + 13) %
//               alphabetArray.length
//           ].toUpperCase();
//       else {
//         result +=
//           alphabetArray[
//             (alphabetArray.indexOf(char) + 13) % alphabetArray.length
//           ];
//       }
//     } else {
//       result += char;
//     }
//   }
//   return result;
//   //your code here
// }

// function moveZeros(arr) {
//   const resultArray = [...arr];

//   console.log(resultArray);
//   while (true) {
//     const indexOfFirstZero = resultArray.findIndex((num) => num === 0);
//     const comparison = [...resultArray];
//     resultArray.push(resultArray.splice(indexOfFirstZero, 1)[0]);
//     if (comparison.every((el, i) => el === resultArray[i])) break;
//   }
//   console.log(resultArray);
//   return;
// }

// function sumPairs(ints, s) {
//   if (!Array.isArray(ints) || typeof s !== "number") {
//     throw new Error(
//       "Invalid input. ints must be an array and s must be a number."
//     );
//   }

//   const numMap = {}; // Hash table to store the elements and their indices.

//   for (let i = 0; i < ints.length; i++) {
//     const num = ints[i];
//     const target = s - num;
//     console.log(numMap);

//     if (numMap[target] !== undefined && numMap[target] < i) {
//       // console.log(numMap[target]);
//       // If the complement exists in the map and its index is less than i, we found a pair.
//       return [ints[numMap[target]], num];
//     }

//     // Add the current number to the map if it doesn't exist yet.
//     if (numMap[num] === undefined) {
//       numMap[num] = i;
//     }
//   }
//   return undefined; // No pair found that satisfies the condition.
// }

// function gap(g, m, n) {
//   let lastPrime = 0;
//   const isPrime = function (x) {
//     for (let i = 2; i * i <= x; i++) {
//       if (x % i == 0) return false;
//     }
//     return true;
//   };

//   for (let i = m; i <= n; i++)
//     if (isPrime(i)) {
//       if (i - lastPrime == g) return [lastPrime, i];
//       else lastPrime = i;
//     }

//   return null;
// }

// var maxSequence = function (arr) {
//   if (arr === [] || arr.every((el) => el <= 0)) return 0;
//   if (arr.every((el) => el > 0)) return arr.reduce((acc, el) => acc + el, 0);
//   let maxSoFar = Number.MIN_VALUE;
//   let maxEndingHere = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     maxEndingHere += number;
//     if (maxSoFar < maxEndingHere) {
//       maxSoFar = maxEndingHere;
//     }
//     if (maxEndingHere < 0) {
//       maxEndingHere = 0;
//     }
//   }
//   return maxSoFar;
//   // ...
// };

// function zero(operation) {
//   return operation ? operation(0) : 0;
// }
// function one(operation) {
//   return operation ? operation(1) : 1;
// }
// function two(operation) {
//   return operation ? operation(2) : 2;
// }
// function three(operation) {
//   return operation ? operation(3) : 3;
// }
// function four(operation) {
//   return operation ? operation(4) : 4;
// }
// function five(operation) {
//   return operation ? operation(5) : 5;
// }
// function six(operation) {
//   return operation ? operation(6) : 6;
// }
// function seven(operation) {
//   return operation ? operation(7) : 7;
// }
// function eight(operation) {
//   return operation ? operation(8) : 8;
// }
// function nine(operation) {
//   return operation ? operation(9) : 9;
// }

// function plus(num) {
//   return function (otherNum) {
//     return otherNum + num;
//   };
// }
// function minus(num) {
//   return function (otherNum) {
//     return otherNum - num;
//   };
// }
// function times(num) {
//   return function (otherNum) {
//     return otherNum * num;
//   };
// }
// function dividedBy(num) {
//   return function (otherNum) {
//     return Math.floor(otherNum / num);
//   };
// }

// console.log(seven(times(five()))); // Output: 35
// console.log(four(plus(nine()))); // Output: 13
// console.log(eight(minus(three()))); // Output: 5
// console.log(six(dividedBy(two()))); // Output: 3

// // 4 KYU

// function hamming(n) {
//   const hammingNumbers = [1];
//   let idx2 = 0,
//     idx3 = 0,
//     idx5 = 0;

//   for (let i = 1; i < n; i++) {
//     const nextHamming = Math.min(
//       hammingNumbers[idx2] * 2,
//       hammingNumbers[idx3] * 3,
//       hammingNumbers[idx5] * 5
//     );
//     console.log(nextHamming);
//     hammingNumbers.push(nextHamming);

//     if (nextHamming === hammingNumbers[idx2] * 2) idx2++;
//     if (nextHamming === hammingNumbers[idx3] * 3) idx3++;
//     if (nextHamming === hammingNumbers[idx5] * 5) idx5++;
//   }

//   return hammingNumbers[n - 1];
// }

// function duplicateEncode(word) {
//   const check = [];
//   let resultString = "";
//   for (let i = 0; i < word.length; i++) {
//     const char = word.charAt(i).toLowerCase();
//     if (check.includes(char)) {
//       resultString += ")";
//       continue;
//     }
//     if (
//       word
//         .slice(i + 1)
//         .toLowerCase()
//         .includes(char)
//     ) {
//       resultString += ")";
//       check.push(char);
//       continue;
//     }
//     resultString += "(";
//   }
//   return resultString;
//   // ...
// }

// function stat(strg) {
//   // Divide the string to substring
//   const eachPlayerInSeconds = strg
//     .split(",")
//     .map((player) => player.split("|"))
//     .map((player) =>
//       player.reduce(function (acc, el, i) {
//         switch (i) {
//           case 0:
//             return acc + +el * 3600;

//           case 1:
//             return acc + +el * 60;

//           case 2:
//             return acc + +el;
//         }
//       }, 0)
//     )
//     .sort((a, b) => a - b);
//   const range =
//     Math.max(...eachPlayerInSeconds) - Math.min(...eachPlayerInSeconds);
//   const average = Math.trunc(
//     eachPlayerInSeconds.reduce((acc, el) => acc + el, 0) /
//       eachPlayerInSeconds.length
//   );
//   const median =
//     eachPlayerInSeconds.length % 2 !== 0
//       ? eachPlayerInSeconds[Math.trunc(eachPlayerInSeconds.length / 2)]
//       : (eachPlayerInSeconds[eachPlayerInSeconds.length / 2 - 1] +
//           eachPlayerInSeconds[eachPlayerInSeconds.length / 2]) /
//         2;

//   const toHMS = function (number) {
//     const hour = Math.trunc(number / 3600);
//     const minute = Math.trunc((number % 3600) / 60);
//     const seconds = Math.trunc((number % 3600) % 60);
//     return `${hour < 10 ? `0${hour}` : `${hour}`}|${
//       minute < 10 ? `0${minute}` : `${minute}`
//     }|${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
//   };
//   return `Range: ${toHMS(range)} Average: ${toHMS(average)} Median: ${toHMS(
//     median
//   )} `;
// }
// console.log(3600 * "  01");
// console.log(4 / 2);
// console.log(Math.trunc(3678 / 3600));
// console.log(Math.trunc((3678 % 3600) / 60));
// console.log(Math.trunc((3678 % 3600) % 60));

// function incrementString(input) {
//   // Find the number at the end of the string
//   const match = input.match(/\d*$/);
//   const numberStr = match ? match[0] : "";

//   // Calculate the new number
//   const currentNumber = Number(numberStr);
//   const newNumber = currentNumber + 1;

//   // Format the new number with leading zeros if needed
//   const numDigits = numberStr.length;
//   console.log(numDigits);
//   const newNumberStr = String(newNumber).padStart(3, "0");
//   console.log(newNumberStr);

//   // Replace the old number with the new number
//   const incrementedString = input.replace(/\d*$/, newNumberStr);

//   return incrementedString;
// }

// function getParticipants(handshakes) {
//   let count = 0;
//   let shakes = new Array(handshakes).fill(1);
//   console.log(shakes);
//   for (let i = 0; i < shakes.length; i++) {
//     let person1 = shakes[i];
//     for (let j = 1; j < shakes.length; j++) {
//       let person2 = shakes[j];
//       if (person1 === 1 && person2 === 1) count += 2;
//       else if (person1 === 0 || person2 === 1) count++;
//       shakes[j] = 0;
//       shakes[i] = 0;
//       if (shakes.every((el) => el === 0)) break;
//       console.log(shakes);
//     }
//   }
//   return count;
// }
