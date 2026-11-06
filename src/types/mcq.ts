export interface MCQOption {
  id: string; // 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
  text: string;
}

export interface Question {
  id: string; // e.g. 'pectoral-1'
  chapterId: string;
  number: number;
  text: string;
  source?: string; // e.g. '2018', 'DEP BOOK', 'IPKA - 2022'
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  regionGroup: 'Shoulder & Axilla' | 'Arm & Cubital Fossa' | 'Forearm & Wrist' | 'Hand & Nerves' | 'Vessels, Lymphatics & Joints';
  description: string;
  questions: Question[];
}

export interface UserAnswerRecord {
  questionId: string;
  chapterId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timestamp: number;
  attempts: number;
  wrongCount: number;
  resolvedFromMistakes?: boolean;
}

export interface ExamQuestionResult {
  questionId: string;
  chapterId: string;
  selectedOptionId: string | null;
  correctOptionId: string;
  isCorrect: boolean;
  flagged: boolean;
}

export interface ExamAttempt {
  id: string;
  startedAt: number;
  completedAt: number;
  durationSeconds: number;
  timeLimitSeconds: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  scorePercentage: number;
  results: ExamQuestionResult[];
  chapterBreakdown: {
    chapterId: string;
    chapterTitle: string;
    total: number;
    correct: number;
    accuracy: number;
  }[];
}

export interface ChapterAnalytics {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  regionGroup: Chapter['regionGroup'];
  totalQuestions: number;
  answeredQuestions: number;
  correctQuestions: number;
  wrongQuestions: number;
  progressPercentage: number;
  accuracyPercentage: number;
}

export interface OverallAnalytics {
  totalQuestionsInBank: number;
  totalAnswered: number;
  totalCorrect: number;
  totalWrongActive: number;
  overallProgressPercentage: number;
  overallAccuracyPercentage: number;
  chaptersCompleted: number;
  totalChapters: number;
  examsTaken: number;
  averageExamScore: number;
  bestExamScore: number;
}
