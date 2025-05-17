import {
  problemDetailsIds,
  problemIds,
  problemStatsIds,
} from "@/constants/problems-ids";
import { db } from "@/database/db";
import {
  problemDetailsSchema,
  programmingLanguageEnum,
} from "../schemas/problem-details.schema";
import { problemStatsSchema } from "../schemas/problem-stats.schema";
import { problemsSchema } from "../schemas/problems.schema";

const seedProblemsData = [
  {
    id: problemIds.twoSum,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy" as const,
    status: "published" as const,
    category: "algorithms" as const,
    tags: ["array", "hash-table"],
    points: 100,
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
    points: 150,
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
        code: "function twoSum(nums, target) {",
        template: "var twoSum = function(nums, target) {",
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
    hints: {
      JavaScript: [
        "Use a hash table to store the numbers and their indices.",
        "Iterate through the array and check if the complement exists in the hash table.",
      ],
      Python: [
        "Use a hash table to store the numbers and their indices.",
        "Iterate through the array and check if the complement exists in the hash table.",
      ],
    },
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
    hints: {
      JavaScript: [
        "You can solve this problem iteratively or recursively.",
        "For iterative solution, use three pointers: prev, curr, and next.",
      ],
      Python: [
        "You can solve this problem iteratively or recursively.",
        "For iterative solution, use three pointers: prev, curr, and next.",
      ],
    },
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
