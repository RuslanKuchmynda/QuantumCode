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
  },
  {
    title: "Reverse a String",
    status: "In Progress",
    difficulty: "Easy",
    submission: "35",
    successRate: "80%",
    type: "String Manipulation",
  },
  {
    title: "Find the Maximum Value in an Array",
    status: "Done",
    difficulty: "Medium",
    submission: "60",
    successRate: "92%",
    type: "Array",
  },
  {
    title: "Prime Number Check",
    status: "Open",
    difficulty: "Medium",
    submission: "30",
    successRate: "88%",
    type: "Math",
  },
  {
    title: "Sorting an Array",
    status: "Done",
    difficulty: "Hard",
    submission: "45",
    successRate: "70%",
    type: "Algorithm",
  },
  {
    title: "Find Factorial of a Number",
    status: "In Progress",
    difficulty: "Easy",
    submission: "25",
    successRate: "90%",
    type: "Math",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    status: "Done",
    difficulty: "Hard",
    submission: "80",
    successRate: "65%",
    type: "String",
  },
  {
    title: "Palindrome Check",
    status: "Open",
    difficulty: "Easy",
    submission: "40",
    successRate: "85%",
    type: "String Manipulation",
  },
  {
    title: "Find Common Elements in Two Arrays",
    status: "In Progress",
    difficulty: "Medium",
    submission: "55",
    successRate: "78%",
    type: "Array",
  },
  {
    title: "Merge Two Sorted Arrays",
    status: "Done",
    difficulty: "Medium",
    submission: "50",
    successRate: "95%",
    type: "Array",
  },
];

export async function seedProblems() {
  await db.insert(problemSchema).values(seedProblemsData);

  console.log("Problems seeded!");
}
