export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of Lucide icon or string identifier

  unlocked: boolean;
  unlockedAt?: string;
}

export interface Student {
  id: string;
  name: string;
  avatar?: string;
  track: string;

  currentDay: number;
  totalDays: number;

  streak: number;
  longestStreak: number;

  completedDays: number;
  completionPercent: number;

  rank?: number;

  github?: string;
  linkedin?: string;

  momentumScore?: number;

  achievements: Achievement[];
}
