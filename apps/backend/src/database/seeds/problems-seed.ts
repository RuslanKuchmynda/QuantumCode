import { db } from "@/database/db";
import { problemSchema } from "@/database/schemas";

const seedProblemsData = [
  {
    title: "Sum of Two Numbers",
    status: "Open",
    difficulty: "Easy",
    submission: "50",
    successRate: "95%",
    type: "Math",
    example: `Example: 
      sum(2, 3) returns 5.
      sum(-1, 5) returns 4. 
      sum(0, 0) returns 0.`,
    description: `Write a function that takes two numbers as input and returns their sum. 
      Handle edge cases like adding negative numbers or zero.`,
  },
  {
    title: "Reverse a String",
    status: "In Progress",
    difficulty: "Easy",
    submission: "35",
    successRate: "80%",
    type: "String Manipulation",
    example: `Example: 
      reverse('hello') returns 'olleh'.
      reverse('racecar') returns 'racecar' (palindrome).`,
    description: `Write a function that takes a string and returns the string reversed. 
      The function should work on any length of input string, including empty strings.`,
  },
  {
    title: "Find the Maximum Value in an Array",
    status: "Done",
    difficulty: "Medium",
    submission: "60",
    successRate: "92%",
    type: "Array",
    example: `Example: 
      findMax([1, 2, 3]) returns 3.
      findMax([-5, 10, 100, -1]) returns 100.
      findMax([5, 5, 5]) returns 5.`,
    description: `Write a function that takes an array of numbers and returns the maximum value in the array. 
      If the array is empty, return null. Handle arrays with both positive and negative numbers.`,
  },
  {
    title: "Prime Number Check",
    status: "Open",
    difficulty: "Medium",
    submission: "30",
    successRate: "88%",
    type: "Math",
    example: `Example: 
      isPrime(5) returns true.
      isPrime(10) returns false.
      isPrime(2) returns true (edge case for the smallest prime).`,
    description: `Write a function that checks if a number is prime. 
      A prime number is a number greater than 1 that is divisible only by 1 and itself.
      The function should return true if the number is prime and false otherwise.`,
  },
  {
    title: "Sorting an Array",
    status: "Done",
    difficulty: "Hard",
    submission: "45",
    successRate: "70%",
    type: "Algorithm",
    example: `Example: 
      sort([3, 1, 2]) returns [1, 2, 3].
      sort([1, 5, 3, 8, 2]) returns [1, 2, 3, 5, 8].`,
    description: `Write a function that sorts an array of numbers in ascending order.
      Use any sorting algorithm and optimize the solution for large datasets if possible.`,
  },
  {
    title: "Find Factorial of a Number",
    status: "In Progress",
    difficulty: "Easy",
    submission: "25",
    successRate: "90%",
    type: "Math",
    example: `Example: 
      factorial(5) returns 120 (5 * 4 * 3 * 2 * 1).
      factorial(0) returns 1 (by definition of factorial).`,
    description: `Write a function that calculates the factorial of a given number. 
      The factorial of a number n is the product of all positive integers less than or equal to n.`,
  },
  {
    title: "Longest Substring Without Repeating Characters",
    status: "Done",
    difficulty: "Hard",
    submission: "80",
    successRate: "65%",
    type: "String",
    example: `Example: 
      longestSubstring('abcabcbb') returns 'abc'.
      longestSubstring('bbbbb') returns 'b'.`,
    description: `Write a function that takes a string and returns the length of the longest substring without repeating characters. For example, the longest substring of 'abcabcbb' is 'abc' and its length is 3.`,
  },
  {
    title: "Palindrome Check",
    status: "Open",
    difficulty: "Easy",
    submission: "40",
    successRate: "85%",
    type: "String Manipulation",
    example: `Example: 
      isPalindrome('racecar') returns true.
      isPalindrome('hello') returns false.`,
    description: `Write a function that checks if a string is a palindrome. 
      A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, ignoring spaces and punctuation.`,
  },
  {
    title: "Find Common Elements in Two Arrays",
    status: "In Progress",
    difficulty: "Medium",
    submission: "55",
    successRate: "78%",
    type: "Array",
    example: `Example: 
      findCommon([1, 2], [2, 3]) returns [2].
      findCommon([1, 3, 5], [3, 7, 5]) returns [3, 5].`,
    description: `Write a function that takes two arrays and returns a new array containing the common elements between them. 
      The function should return an empty array if no common elements exist.`,
  },
  {
    title: "Merge Two Sorted Arrays",
    status: "Done",
    difficulty: "Medium",
    submission: "50",
    successRate: "95%",
    type: "Array",
    example: `Example: 
      merge([1, 3, 5], [2, 4, 6]) returns [1, 2, 3, 4, 5, 6].
      merge([7, 8, 9], [4, 5, 6]) returns [4, 5, 6, 7, 8, 9].`,
    description: `Write a function that merges two sorted arrays into one sorted array. 
      You should not use any external sorting methods, and the arrays may have different lengths.`,
  },
];

export async function seedProblems() {
  await db.insert(problemSchema).values(seedProblemsData);

  console.log("Problems seeded!");
}
