import {
  problemDetailsIds,
  problemIds,
  problemStatsIds,
} from "@/constants/problems-ids";
import { db } from "@/database/db";
import {
  problemDetailsSchema,
  programmingLanguageEnum,
} from "@/database/schemas/problem-details.schema";
import { problemStatsSchema } from "@/database/schemas/problem-stats.schema";
import { problemsSchema } from "@/database/schemas/problems.schema";

const seedProblemsData = [
  {
    id: problemIds.twoSum,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["array", "hash-table"],
    points: 10,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.reverseLinkedList,
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "Easy" as const,
    status: "published" as const,
    category: "data-structures" as const,
    tags: ["linked-list", "recursion"],
    points: 10,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.addTwoNumbers,
    title: "Add Two Numbers",
    slug: "add-two-numbers",
    difficulty: "Medium" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["linked-list", "math"],
    points: 15,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.medianOfTwoSortedArrays,
    title: "Median of Two Sorted Arrays",
    slug: "median-of-two-sorted-arrays",
    difficulty: "Hard" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["array", "binary-search"],
    points: 30,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.palindromeNumber,
    title: "Palindrome Number",
    slug: "palindrome-number",
    difficulty: "Easy" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["math"],
    points: 10,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.mergeKSortedLists,
    title: "Merge k Sorted Lists",
    slug: "merge-k-sorted-lists",
    difficulty: "Hard" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["linked-list", "heap"],
    points: 30,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.removeElement,
    title: "Remove Element",
    slug: "remove-element",
    difficulty: "Easy" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["array", "two-pointers"],
    points: 10,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
  {
    id: problemIds.jumpGame,
    title: "Jump Game",
    slug: "jump-game",
    difficulty: "Medium" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["array", "greedy"],
    points: 15,
    timeLimit: 1000,
    memoryLimit: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    isPremium: false,
  },
];

const seedProblemDetailsData = [
  {
    id: problemDetailsIds.twoSum,
    problemId: problemIds.twoSum,
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "[2,7,11,15]",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
    ],
    starterCode: {
      JavaScript: {
        code: "function twoSum(nums, target) {}",
        template: "var twoSum = function(nums, target) {}",
        testCases: [
          {
            input: "[2,7,11,15]",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
          },
        ],
      },
      Python: {
        code: "def twoSum(nums, target):",
        template: "def twoSum(nums, target):",
        testCases: [
          {
            input: "[2,7,11,15]",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
          },
        ],
      },
    },
    hints: [
      "Use a hash table to store the numbers and their indices.",
      "Iterate through the array and check if the complement exists in the hash table.",
    ],
    solution: {
      JavaScript: {
        code: "function twoSum(nums, target) {",
        explanation:
          "We use a hash table to store the numbers and their indices. We iterate through the array and check if the complement exists in the hash table. If it does, we return the indices of the two numbers. If it doesn't, we add the number and its index to the hash table.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
      },
      Python: {
        code: "def twoSum(nums, target):",
        explanation:
          "We use a hash table to store the numbers and their indices. We iterate through the array and check if the complement exists in the hash table. If it does, we return the indices of the two numbers. If it doesn't, we add the number and its index to the hash table.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
      },
    },
    explanation:
      "We use a hash table to store the numbers and their indices. We iterate through the array and check if the complement exists in the hash table. If it does, we return the indices of the two numbers. If it doesn't, we add the number and its index to the hash table.",
    availableLanguages: [
      "JavaScript",
      "Python",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.reverseLinkedList,
    problemId: problemIds.reverseLinkedList,
    description:
      "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The linked list is reversed.",
      },
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 5000]",
      "-5000 <= Node.val <= 5000",
    ],
    starterCode: {
      JavaScript: {
        code: "function reverseList(head) {",
        template: "var reverseList = function(head) {",
        testCases: [
          {
            input: "head = [1,2,3,4,5]",
            output: "[5,4,3,2,1]",
            explanation: "The linked list is reversed.",
          },
        ],
      },
      Python: {
        code: "def reverseList(head):",
        template: "def reverseList(head):",
        testCases: [
          {
            input: "head = [1,2,3,4,5]",
            output: "[5,4,3,2,1]",
            explanation: "The linked list is reversed.",
          },
        ],
      },
    },
    hints: [
      "You can solve this problem iteratively or recursively.",
      "For iterative solution, use three pointers: prev, curr, and next.",
    ],
    solution: {
      JavaScript: {
        code: "function reverseList(head) {",
        explanation:
          "We use three pointers to reverse the list: prev, curr, and next. We iterate through the list, updating the pointers to reverse the links.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
      Python: {
        code: "def reverseList(head):",
        explanation:
          "We use three pointers to reverse the list: prev, curr, and next. We iterate through the list, updating the pointers to reverse the links.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
    },
    explanation:
      "We use three pointers to reverse the list: prev, curr, and next. We iterate through the list, updating the pointers to reverse the links.",
    availableLanguages: [
      "JavaScript",
      "Python",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.addTwoNumbers,
    problemId: problemIds.addTwoNumbers,
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100]",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros.",
    ],
    starterCode: {
      JavaScript: {
        code: "function addTwoNumbers(l1, l2) {}",
        template: "var addTwoNumbers = function(l1, l2) {}",
      },
    },
    hints: [
      "You can solve this problem iteratively or recursively.",
      "For iterative solution, use three pointers: prev, curr, and next.",
    ],
    solution: {
      JavaScript: {
        code: "function addTwoNumbers(l1, l2) {",
        explanation:
          "We use three pointers to add the two numbers: l1, l2, and carry. We iterate through the lists, adding the values and carrying the overflow.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
    },
    explanation:
      "We use three pointers to add the two numbers: l1, l2, and carry. We iterate through the lists, adding the values and carrying the overflow.",
    availableLanguages: [
      "JavaScript",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.medianOfTwoSortedArrays,
    problemId: problemIds.medianOfTwoSortedArrays,
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "The median is 2.",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6",
    ],
    starterCode: {
      JavaScript: {
        code: "function findMedianSortedArrays(nums1, nums2) {}",
        template: "var findMedianSortedArrays = function(nums1, nums2) {}",
      },
    },
    hints: [
      "You can solve this problem by merging the arrays and finding the median.",
    ],
    solution: {
      JavaScript: {
        code: "function findMedianSortedArrays(nums1, nums2) {",
        explanation:
          "We can solve this problem by merging the arrays and finding the median.",
        timeComplexity: "O(m + n)",
        spaceComplexity: "O(m + n)",
      },
    },
    explanation:
      "We can solve this problem by merging the arrays and finding the median.",
    availableLanguages: [
      "JavaScript",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.palindromeNumber,
    problemId: problemIds.palindromeNumber,
    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      {
        input: "121",
        output: "true",
        explanation: "121 is a palindrome.",
      },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    starterCode: {
      JavaScript: {
        code: "function isPalindrome(x) {}",
        template: "var isPalindrome = function(x) {}",
      },
    },
    hints: [
      "You can solve this problem by reversing the number and comparing it to the original number.",
    ],
    solution: {
      JavaScript: {
        code: "function isPalindrome(x) {",
        explanation:
          "We can solve this problem by reversing the number and comparing it to the original number.",
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
      },
    },
    explanation:
      "We can solve this problem by reversing the number and comparing it to the original number.",
    availableLanguages: [
      "JavaScript",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.mergeKSortedLists,
    problemId: problemIds.mergeKSortedLists,
    description:
      "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "The merged linked list is [1,1,2,3,4,4,5,6].",
      },
    ],
    constraints: [
      "k == lists.length",
      "0 <= k <= 10^4",
      "0 <= lists[i].length <= 500",
      "-10^4 <= lists[i][j] <= 10^4",
      "lists[i] is sorted in ascending order.",
    ],
    starterCode: {
      JavaScript: {
        code: "function mergeKLists(lists) {}",
        template: "var mergeKLists = function(lists) {}",
      },
    },
    hints: ["You can solve this problem by merging the lists one by one."],
    solution: {
      JavaScript: {
        code: "function mergeKLists(lists) {",
        explanation:
          "We can solve this problem by merging the lists one by one.",
        timeComplexity: "O(n log k)",
        spaceComplexity: "O(k)",
      },
    },
    explanation: "We can solve this problem by merging the lists one by one.",
    availableLanguages: [
      "JavaScript",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.removeElement,
    problemId: problemIds.removeElement,
    description:
      "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
    examples: [
      {
        input: "nums = [3,2,2,3], val = 3",
        output: "2, nums = [2,2,_,_]",
        explanation:
          "Your function should return k = 2, with the first two elements of nums being 2.",
      },
    ],
    constraints: [
      "0 <= nums.length <= 100",
      "0 <= nums[i] <= 50",
      "0 <= val <= 100",
    ],
    starterCode: {
      JavaScript: {
        code: "function removeElement(nums, val) {}",
        template: "var removeElement = function(nums, val) {}",
      },
    },
    hints: ["You can solve this problem by using two pointers."],
    solution: {
      JavaScript: {
        code: "function removeElement(nums, val) {",
        explanation:
          "We use two pointers to remove the elements. We iterate through the array, and if the current element is not equal to val, we move the pointer to the next element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
    },
    explanation:
      "We use two pointers to remove the elements. We iterate through the array, and if the current element is not equal to val, we move the pointer to the next element.",
    availableLanguages: [
      "JavaScript",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
  {
    id: problemDetailsIds.jumpGame,
    problemId: problemIds.jumpGame,
    description:
      "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.",
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
        explanation:
          "The array can be split into two non-empty subarrays: [2,3,1,1,4] and [2,3,1,1,4].",
      },
    ],
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
    starterCode: {
      JavaScript: {
        code: "function canJump(nums) {}",
        template: "var canJump = function(nums) {}",
      },
    },
    hints: ["You can solve this problem by using a greedy algorithm."],
    solution: {
      JavaScript: {
        code: "function canJump(nums) {",
        explanation:
          "We use a greedy algorithm to solve this problem. We iterate through the array, and if the current element is not equal to val, we move the pointer to the next element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
    },
    explanation:
      "We use a greedy algorithm to solve this problem. We iterate through the array, and if the current element is not equal to val, we move the pointer to the next element.",
    availableLanguages: [
      "JavaScript",
    ] as (typeof programmingLanguageEnum.enumValues)[number][],
  },
];

const seedProblemStatsData = [
  {
    id: problemStatsIds.twoSum,
    problemId: problemIds.twoSum,
    totalSubmissions: 78,
    acceptedSubmissions: 4,
    successRate: 57,
    averageRuntime: 100,
    averageMemory: 100,
    updatedAt: new Date(),
  },
  {
    id: problemStatsIds.reverseLinkedList,
    problemId: problemIds.reverseLinkedList,
    totalSubmissions: 45,
    acceptedSubmissions: 3,
    successRate: 65,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },
  {
    id: problemStatsIds.addTwoNumbers,
    problemId: problemIds.addTwoNumbers,
    totalSubmissions: 127,
    acceptedSubmissions: 100,
    successRate: 78,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },
  {
    id: problemStatsIds.medianOfTwoSortedArrays,
    problemId: problemIds.medianOfTwoSortedArrays,
    totalSubmissions: 70,
    acceptedSubmissions: 40,
    successRate: 57,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },

  {
    id: problemStatsIds.palindromeNumber,
    problemId: problemIds.palindromeNumber,
    totalSubmissions: 127,
    acceptedSubmissions: 100,
    successRate: 78,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },
  {
    id: problemStatsIds.mergeKSortedLists,
    problemId: problemIds.mergeKSortedLists,
    totalSubmissions: 32,
    acceptedSubmissions: 20,
    successRate: 62,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },
  {
    id: problemStatsIds.removeElement,
    problemId: problemIds.removeElement,
    totalSubmissions: 192,
    acceptedSubmissions: 10,
    successRate: 52,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },
  {
    id: problemStatsIds.jumpGame,
    problemId: problemIds.jumpGame,
    totalSubmissions: 150,
    acceptedSubmissions: 100,
    successRate: 66,
    averageRuntime: 120,
    averageMemory: 120,
    updatedAt: new Date(),
  },
];

export async function seedProblems() {
  try {
    for (const problem of seedProblemsData) {
      await db.insert(problemsSchema).values(problem);
    }

    for (const detail of seedProblemDetailsData) {
      await db.insert(problemDetailsSchema).values(detail);
    }

    for (const stat of seedProblemStatsData) {
      await db.insert(problemStatsSchema).values(stat);
    }

    console.log("Problems seeded successfully!");
  } catch (error) {
    console.error("Error seeding problems:", error);
    throw error;
  }
}
