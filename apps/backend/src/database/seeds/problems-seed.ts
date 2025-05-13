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
    example: [
      {
        input: "sum(2, 3)",
        output: "5",
        explanation: "2 + 3 = 5",
      },
      {
        input: "sum(-1, 5)",
        output: "4",
        explanation: "-1 + 5 = 4",
      },
      {
        input: "sum(0, 0)",
        output: "0",
        explanation: "0 + 0 = 0",
      },
    ],
    description: `Write a function that takes two numbers as input and returns their sum. 
      Handle edge cases like adding negative numbers or zero.`,
    constraints: [
      "Input numbers can be positive or negative",
      "Input numbers can be zero",
      "Result should be a number",
    ],
    starterCode: {
      javascript: `function sum(a, b) {
  // Write your code here
}`,
      typescript: `function sum(a: number, b: number): number {
  // Write your code here
}`,
      python: `def sum(a: int, b: int) -> int:
    # Write your code here`,
    },
  },
  {
    title: "Reverse a String",
    status: "In Progress",
    difficulty: "Easy",
    submission: "35",
    successRate: "80%",
    type: "String Manipulation",
    example: [
      {
        input: "reverse('hello')",
        output: "'olleh'",
        explanation: "The string 'hello' reversed is 'olleh'",
      },
      {
        input: "reverse('racecar')",
        output: "'racecar'",
        explanation:
          "The string 'racecar' is a palindrome, so it remains the same when reversed",
      },
    ],
    description: `Write a function that takes a string and returns the string reversed. 
      The function should work on any length of input string, including empty strings.`,
    constraints: [
      "Input can be any string",
      "Input can be empty",
      "Result should be a string",
    ],
    starterCode: {
      javascript: `function reverse(str) {
  // Write your code here
}`,
      typescript: `function reverse(str: string): string {
  // Write your code here
}`,
      python: `def reverse(s: str) -> str:
    # Write your code here`,
    },
  },
  {
    title: "Find the Maximum Value in an Array",
    status: "Done",
    difficulty: "Medium",
    submission: "60",
    successRate: "92%",
    type: "Array",
    example: [
      {
        input: "findMax([1, 2, 3])",
        output: "3",
        explanation: "3 is the largest number in the array",
      },
      {
        input: "findMax([-5, 10, 100, -1])",
        output: "100",
        explanation: "100 is the largest number in the array",
      },
      {
        input: "findMax([5, 5, 5])",
        output: "5",
        explanation: "All numbers are equal, so 5 is the maximum",
      },
    ],
    description: `Write a function that takes an array of numbers and returns the maximum value in the array. 
      If the array is empty, return null. Handle arrays with both positive and negative numbers.`,
    constraints: [
      "Array can contain positive and negative numbers",
      "Array can be empty",
      "All numbers in array are integers",
    ],
    starterCode: {
      javascript: `function findMax(arr) {
  // Write your code here
}`,
      typescript: `function findMax(arr: number[]): number | null {
  // Write your code here
}`,
      python: `def find_max(arr: list[int]) -> int | None:
    # Write your code here`,
    },
  },
  {
    title: "Prime Number Check",
    status: "Open",
    difficulty: "Medium",
    submission: "30",
    successRate: "88%",
    type: "Math",
    example: [
      {
        input: "isPrime(5)",
        output: "true",
        explanation: "5 is a prime number as it's only divisible by 1 and itself"
      },
      {
        input: "isPrime(10)",
        output: "false",
        explanation: "10 is not a prime number as it's divisible by 2 and 5"
      },
      {
        input: "isPrime(2)",
        output: "true",
        explanation: "2 is the smallest prime number"
      }
    ],
    description: `Write a function that checks if a number is prime. 
      A prime number is a number greater than 1 that is divisible only by 1 and itself.
      The function should return true if the number is prime and false otherwise.`,
    constraints: [
      "Input number is greater than 0",
      "Input number is an integer",
      "Return value should be boolean"
    ],
    starterCode: {
      javascript: `function isPrime(num) {
  // Write your code here
}`,
      typescript: `function isPrime(num: number): boolean {
  // Write your code here
}`,
      python: `def is_prime(num: int) -> bool:
    # Write your code here`
    }
  },
  {
    title: "Sorting an Array",
    status: "Done",
    difficulty: "Hard",
    submission: "45",
    successRate: "70%",
    type: "Algorithm",
    example: [
      {
        input: "sort([3, 1, 2])",
        output: "[1, 2, 3]",
        explanation: "Array is sorted in ascending order"
      },
      {
        input: "sort([1, 5, 3, 8, 2])",
        output: "[1, 2, 3, 5, 8]",
        explanation: "Array is sorted in ascending order"
      }
    ],
    description: `Write a function that sorts an array of numbers in ascending order.
      Use any sorting algorithm and optimize the solution for large datasets if possible.`,
    constraints: [
      "Array can contain positive and negative numbers",
      "Array can be empty",
      "All numbers in array are integers",
      "Do not use built-in sorting methods"
    ],
    starterCode: {
      javascript: `function sort(arr) {
  // Write your code here
}`,
      typescript: `function sort(arr: number[]): number[] {
  // Write your code here
}`,
      python: `def sort(arr: list[int]) -> list[int]:
    # Write your code here`
    }
  },
  {
    title: "Find Factorial of a Number",
    status: "In Progress",
    difficulty: "Easy",
    submission: "25",
    successRate: "90%",
    type: "Math",
    example: [
      {
        input: "factorial(5)",
        output: "120",
        explanation: "5 * 4 * 3 * 2 * 1 = 120"
      },
      {
        input: "factorial(0)",
        output: "1",
        explanation: "By definition, factorial of 0 is 1"
      }
    ],
    description: `Write a function that calculates the factorial of a given number. 
      The factorial of a number n is the product of all positive integers less than or equal to n.`,
    constraints: [
      "Input number is non-negative",
      "Input number is an integer",
      "Result should be a number"
    ],
    starterCode: {
      javascript: `function factorial(n) {
  // Write your code here
}`,
      typescript: `function factorial(n: number): number {
  // Write your code here
}`,
      python: `def factorial(n: int) -> int:
    # Write your code here`
    }
  },
  {
    title: "Longest Substring Without Repeating Characters",
    status: "Done",
    difficulty: "Hard",
    submission: "80",
    successRate: "65%",
    type: "String",
    example: [
      {
        input: "longestSubstring('abcabcbb')",
        output: "3",
        explanation: "The longest substring without repeating characters is 'abc' with length 3"
      },
      {
        input: "longestSubstring('bbbbb')",
        output: "1",
        explanation: "The longest substring without repeating characters is 'b' with length 1"
      }
    ],
    description: `Write a function that takes a string and returns the length of the longest substring without repeating characters.`,
    constraints: [
      "Input can be any string",
      "Input can be empty",
      "Result should be a number",
      "Case sensitive"
    ],
    starterCode: {
      javascript: `function longestSubstring(s) {
  // Write your code here
}`,
      typescript: `function longestSubstring(s: string): number {
  // Write your code here
}`,
      python: `def longest_substring(s: str) -> int:
    # Write your code here`
    }
  },
  {
    title: "Palindrome Check",
    status: "Open",
    difficulty: "Easy",
    submission: "40",
    successRate: "85%",
    type: "String Manipulation",
    example: [
      {
        input: "isPalindrome('racecar')",
        output: "true",
        explanation: "The string reads the same forwards and backwards"
      },
      {
        input: "isPalindrome('hello')",
        output: "false",
        explanation: "The string does not read the same forwards and backwards"
      }
    ],
    description: `Write a function that checks if a string is a palindrome. 
      A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, ignoring spaces and punctuation.`,
    constraints: [
      "Input can be any string",
      "Input can be empty",
      "Result should be boolean",
      "Case insensitive"
    ],
    starterCode: {
      javascript: `function isPalindrome(str) {
  // Write your code here
}`,
      typescript: `function isPalindrome(str: string): boolean {
  // Write your code here
}`,
      python: `def is_palindrome(s: str) -> bool:
    # Write your code here`
    }
  },
  {
    title: "Find Common Elements in Two Arrays",
    status: "In Progress",
    difficulty: "Medium",
    submission: "55",
    successRate: "78%",
    type: "Array",
    example: [
      {
        input: "findCommon([1, 2], [2, 3])",
        output: "[2]",
        explanation: "2 is the only common element between both arrays"
      },
      {
        input: "findCommon([1, 3, 5], [3, 7, 5])",
        output: "[3, 5]",
        explanation: "3 and 5 are the common elements between both arrays"
      }
    ],
    description: `Write a function that takes two arrays and returns a new array containing the common elements between them. 
      The function should return an empty array if no common elements exist.`,
    constraints: [
      "Arrays can contain any type of elements",
      "Arrays can be empty",
      "Result should be an array",
      "Order of elements in result doesn't matter"
    ],
    starterCode: {
      javascript: `function findCommon(arr1, arr2) {
  // Write your code here
}`,
      typescript: `function findCommon<T>(arr1: T[], arr2: T[]): T[] {
  // Write your code here
}`,
      python: `def find_common(arr1: list, arr2: list) -> list:
    # Write your code here`
    }
  },
  {
    title: "Merge Two Sorted Arrays",
    status: "Done",
    difficulty: "Medium",
    submission: "50",
    successRate: "95%",
    type: "Array",
    example: [
      {
        input: "merge([1, 3, 5], [2, 4, 6])",
        output: "[1, 2, 3, 4, 5, 6]",
        explanation: "Arrays are merged and sorted in ascending order"
      },
      {
        input: "merge([7, 8, 9], [4, 5, 6])",
        output: "[4, 5, 6, 7, 8, 9]",
        explanation: "Arrays are merged and sorted in ascending order"
      }
    ],
    description: `Write a function that merges two sorted arrays into one sorted array. 
      You should not use any external sorting methods, and the arrays may have different lengths.`,
    constraints: [
      "Input arrays are already sorted",
      "Arrays can be empty",
      "Arrays can have different lengths",
      "Result should be a sorted array"
    ],
    starterCode: {
      javascript: `function merge(arr1, arr2) {
  // Write your code here
}`,
      typescript: `function merge(arr1: number[], arr2: number[]): number[] {
  // Write your code here
}`,
      python: `def merge(arr1: list[int], arr2: list[int]) -> list[int]:
    # Write your code here`
    }
  }
];

export async function seedProblems() {
  const formattedData = seedProblemsData.map(problem => ({
    ...problem,
    example: JSON.stringify(problem.example),
    constraints: JSON.stringify(problem.constraints),
    starterCode: JSON.stringify(problem.starterCode)
  }));

  await db.insert(problemSchema).values(formattedData);
  console.log("Problems seeded!");
}
