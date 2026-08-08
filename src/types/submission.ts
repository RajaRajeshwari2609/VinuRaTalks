export interface Submission {
  day: number;

  githubUrl?: string;
  linkedinUrl?: string;

  submittedAt?: string;

  status:
    | "not_started"
    | "partial"
    | "completed";
}
