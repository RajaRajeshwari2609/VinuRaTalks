export interface Resource {
  id: string;
  title: string;
  url: string;
  type?: "documentation" | "video" | "article" | "github";
}

export interface Challenge {
  day: number;
  title: string;
  subtitle?: string;
  description: string;

  difficulty: "Easy" | "Medium" | "Hard";

  estimatedMinutes: number;

  objectives: string[];

  requirements: string[];

  resources?: Resource[];
}
