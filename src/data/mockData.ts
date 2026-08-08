import type { Student, Achievement } from '../types/student';
import type { Challenge } from '../types/challenge';
import type { Submission } from '../types/submission';

// ----------------------------------------------------
// Mock Achievements
// ----------------------------------------------------
export const mockAchievements: Achievement[] = [
  {
    id: "ach-1",
    title: "First Commit",
    description: "Submit your very first day challenge project.",
    icon: "git-commit",
    unlocked: true,
    unlockedAt: "2026-07-28"
  },
  {
    id: "ach-2",
    title: "7-Day Builder",
    description: "Complete 7 challenge days in a row.",
    icon: "zap",
    unlocked: true,
    unlockedAt: "2026-08-03"
  },
  {
    id: "ach-3",
    title: "10-Day Streak",
    description: "Maintain a double-digit consistency streak.",
    icon: "flame",
    unlocked: true,
    unlockedAt: "2026-08-06"
  },
  {
    id: "ach-4",
    title: "Project Builder",
    description: "Complete 10 projects with github proof.",
    icon: "box",
    unlocked: true,
    unlockedAt: "2026-08-06"
  },
  {
    id: "ach-5",
    title: "30-Day Builder",
    description: "Reach the half-way mark of consistency.",
    icon: "award",
    unlocked: false
  },
  {
    id: "ach-6",
    title: "Elite Finisher",
    description: "Complete all 60 days of the track.",
    icon: "trophy",
    unlocked: false
  }
];

// ----------------------------------------------------
// Mock Student Profiles (Representing different states)
// ----------------------------------------------------

// 1. Active State (Normal Riya profile)
export const mockStudentActive: Student = {
  id: "student-001",
  name: "Riya",
  avatar: undefined, // Will render avatar initials fallback
  track: "Python & Data Engineering",
  currentDay: 12,
  totalDays: 60,
  streak: 11,
  longestStreak: 11,
  completedDays: 11,
  completionPercent: 18.3,
  rank: 127,
  github: "https://github.com/riya-codes",
  linkedin: "https://linkedin.com/in/riya-dev",
  momentumScore: 82,
  achievements: mockAchievements
};

// 2. Empty State (Day 1, fresh start)
export const mockStudentEmpty: Student = {
  id: "student-002",
  name: "Aarav",
  avatar: undefined,
  track: "Python & Data Engineering",
  currentDay: 1,
  totalDays: 60,
  streak: 0,
  longestStreak: 0,
  completedDays: 0,
  completionPercent: 0.0,
  rank: 512,
  github: "",
  linkedin: "",
  momentumScore: 0,
  achievements: mockAchievements.map(a => ({ ...a, unlocked: false, unlockedAt: undefined }))
};

// 3. Missed-Day State (Streak broken/paused, recovery path)
export const mockStudentMissed: Student = {
  id: "student-003",
  name: "Riya",
  avatar: undefined,
  track: "Python & Data Engineering",
  currentDay: 12,
  totalDays: 60,
  streak: 0, // Streak paused
  longestStreak: 11,
  completedDays: 11,
  completionPercent: 18.3,
  rank: 142, // Slipped slightly
  github: "https://github.com/riya-codes",
  linkedin: "https://linkedin.com/in/riya-dev",
  momentumScore: 45, // Momentum score dropped due to streak pause
  achievements: mockAchievements
};

// 4. Incomplete Profile State (Active challenge, but missing connections)
export const mockStudentIncompleteProfile: Student = {
  id: "student-004",
  name: "Riya",
  avatar: undefined,
  track: "Python & Data Engineering",
  currentDay: 12,
  totalDays: 60,
  streak: 11,
  longestStreak: 11,
  completedDays: 11,
  completionPercent: 18.3,
  rank: 127,
  github: "", // Missing connection
  linkedin: "", // Missing connection
  momentumScore: 68, // Lower score because profile verification links missing
  achievements: mockAchievements
};

// ----------------------------------------------------
// Mock Challenges (Focusing on Day 12 context)
// ----------------------------------------------------
export const mockChallenges: Challenge[] = [
  {
    day: 1,
    title: "Setup Environment & Python Basics",
    description: "Install Anaconda, configure VS Code, write variables, control flows, and file input/output in Python.",
    difficulty: "Easy",
    estimatedMinutes: 30,
    objectives: [
      "Configure Python local runtime environment",
      "Write a basic text parser utilizing string arrays"
    ],
    requirements: [
      "GitHub repository initialized and pushed",
      "LinkedIn post detailing local installation setup"
    ]
  },
  {
    day: 11,
    title: "SQL Schema Design for E-Commerce",
    description: "Design relational SQL tables, foreign keys, and indexes for a scalable e-commerce database transaction model.",
    difficulty: "Medium",
    estimatedMinutes: 50,
    objectives: [
      "Draft tables for users, products, orders, and order_items",
      "Write aggregate SQL queries with JOINs and index optimizations"
    ],
    requirements: [
      "SQL schema file (.sql) pushed to repository",
      "Post SQL query stats on LinkedIn"
    ]
  },
  {
    day: 12,
    title: "Build a CSV Data Cleaning Pipeline",
    subtitle: "Python & Data Engineering Track",
    description: "Clean messy CSV files containing missing rows, invalid datatypes, and duplicate entries using Python, producing a structured, verified CSV output ready for database ingestion.",
    difficulty: "Medium",
    estimatedMinutes: 45,
    objectives: [
      "Handle null or empty values gracefully using standard imputations",
      "Format dates and clean phone numbers using regular expressions",
      "Deduplicate dataset based on unique keys and output cleaned CSV"
    ],
    requirements: [
      "Create `pipeline.py` script which takes `dirty.csv` and outputs `clean.csv`",
      "Write unit tests to verify data parsing logic",
      "Commit Python script and output screenshots to GitHub",
      "Share your data-engineering cleaning flow on LinkedIn under #VinuRaTalksChallenge"
    ],
    resources: [
      {
        id: "res-1",
        title: "Pandas Data Cleaning Cookbook",
        url: "https://pandas.pydata.org/docs/user_guide/reshaping.html",
        type: "documentation"
      },
      {
        id: "res-2",
        title: "Video: Practical Regular Expressions for Data Preprocessing",
        url: "https://youtube.com/example",
        type: "video"
      }
    ]
  }
];

// Helper to fetch challenge by day
export const getChallengeByDay = (day: number): Challenge => {
  return mockChallenges.find(c => c.day === day) || mockChallenges[2];
};

// ----------------------------------------------------
// Mock Submissions (Riya's historic submissions)
// ----------------------------------------------------
export const mockSubmissions: Submission[] = [
  {
    day: 1,
    githubUrl: "https://github.com/riya-codes/vinura-challenge/tree/day-1",
    linkedinUrl: "https://linkedin.com/posts/riya-dev-day1",
    submittedAt: "2026-07-28T19:42:00Z",
    status: "completed"
  },
  {
    day: 10,
    githubUrl: "https://github.com/riya-codes/vinura-challenge/tree/day-10",
    linkedinUrl: "https://linkedin.com/posts/riya-dev-day10",
    submittedAt: "2026-08-06T20:15:00Z",
    status: "completed"
  },
  {
    day: 11,
    githubUrl: "https://github.com/riya-codes/vinura-challenge/tree/day-11",
    linkedinUrl: "https://linkedin.com/posts/riya-dev-day11",
    submittedAt: "2026-08-07T18:30:00Z",
    status: "completed"
  },
  {
    day: 12,
    githubUrl: "",
    linkedinUrl: "",
    status: "not_started"
  }
];

// ----------------------------------------------------
// Mock Leaderboard Standings
// ----------------------------------------------------
export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar?: string;
  streak: number;
  completedDays: number;
  momentum: number;
  isCurrentUser?: boolean;
}

export const mockLeaderboard: LeaderboardUser[] = [
  { rank: 124, name: "Ananya Sharma", streak: 12, completedDays: 12, momentum: 94 },
  { rank: 125, name: "Rahul Verma", streak: 12, completedDays: 12, momentum: 91 },
  { rank: 126, name: "Priya Patel", streak: 11, completedDays: 11, momentum: 85 },
  { rank: 127, name: "Riya (You)", streak: 11, completedDays: 11, momentum: 82, isCurrentUser: true },
  { rank: 128, name: "Karan Gupta", streak: 10, completedDays: 11, momentum: 79 },
  { rank: 129, name: "Sneha Nair", streak: 10, completedDays: 10, momentum: 76 }
];
