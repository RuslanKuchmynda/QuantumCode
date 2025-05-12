export const userData = {
    username: "quantum_coder",
    name: "John Doe",
    rank: 1234,
    solvedProblems: {
      easy: 45,
      medium: 30,
      hard: 15,
      total: 90,
    },
    acceptanceRate: 85,
    submissionStats: {
      total: 250,
      accepted: 212,
      wrongAnswer: 25,
      timeLimitExceeded: 8,
      runtimeError: 5,
    },
    recentActivity: [
      {
        type: "solved",
        problem: "Two Sum",
        difficulty: "Easy" as const,
        date: "2024-03-20",
      },
      {
        type: "solved",
        problem: "Add Two Numbers",
        difficulty: "Medium" as const,
        date: "2024-03-19",
      },
      {
        type: "attempted",
        problem: "Longest Palindromic Substring",
        difficulty: "Medium" as const,
        date: "2024-03-18",
      },
    ],
    skills: {
      languages: [
        { name: "Python", percentage: 45 },
        { name: "JavaScript", percentage: 30 },
        { name: "Java", percentage: 15 },
        { name: "C++", percentage: 10 },
      ],
      patterns: [
        "Dynamic Programming",
        "Graph Algorithms",
        "Binary Search",
        "Two Pointers",
      ],
    },
    contestHistory: {
      rating: 1850,
      contests: 15,
      bestRank: 50,
      ratingHistory: [1500, 1600, 1550, 1700, 1850],
    },
    problemCategories: [
      { name: "Dynamic Programming", count: 25, color: "#3b82f6" },
      { name: "Graph", count: 20, color: "#10b981" },
      { name: "Array", count: 30, color: "#f59e0b" },
      { name: "String", count: 15, color: "#8b5cf6" },
      { name: "Tree", count: 10, color: "#ef4444" },
    ],
    achievements: [
      { name: "100 Problems Solved", icon: "🏆", date: "2024-03-15" },
      { name: "First Hard Problem", icon: "🌟", date: "2024-03-10" },
      { name: "5 Day Streak", icon: "🔥", date: "2024-03-20" },
    ],
    streak: {
      current: 5,
      longest: 15,
      lastActive: "2024-03-20",
      nextMilestone: 7,
    },
  };