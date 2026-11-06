import {
  Chapter,
  ChapterAnalytics,
  ExamAttempt,
  ExamQuestionResult,
  OverallAnalytics,
  Question,
  UserAnswerRecord,
} from '../types/mcq';

/**
 * Updates or creates a user answer record when a user answers a question in Chapter Practice or Mistakes Review.
 */
export function recordQuestionAttempt(
  existing: UserAnswerRecord | undefined,
  question: Question,
  selectedOptionId: string,
  timestamp: number = Date.now(),
  fromMistakesReview: boolean = false
): UserAnswerRecord {
  const isCorrect = selectedOptionId === question.correctOptionId;
  const previousAttempts = existing ? existing.attempts : 0;
  const previousWrongCount = existing ? existing.wrongCount : 0;

  return {
    questionId: question.id,
    chapterId: question.chapterId,
    selectedOptionId,
    isCorrect,
    timestamp,
    attempts: previousAttempts + 1,
    wrongCount: isCorrect ? previousWrongCount : previousWrongCount + 1,
    resolvedFromMistakes: isCorrect && (fromMistakesReview || (existing?.wrongCount ?? 0) > 0),
  };
}

/**
 * Computes per-chapter progression and performance analytics.
 */
export function calculateChapterAnalytics(
  chapters: Chapter[],
  answersMap: Record<string, UserAnswerRecord>
): ChapterAnalytics[] {
  return chapters.map((chapter) => {
    const totalQuestions = chapter.questions.length;
    let answeredQuestions = 0;
    let correctQuestions = 0;
    let wrongQuestions = 0;

    for (const q of chapter.questions) {
      const record = answersMap[q.id];
      if (record) {
        answeredQuestions += 1;
        if (record.isCorrect) {
          correctQuestions += 1;
        } else {
          wrongQuestions += 1;
        }
      }
    }

    const progressPercentage =
      totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
    const accuracyPercentage =
      answeredQuestions > 0 ? Math.round((correctQuestions / answeredQuestions) * 100) : 0;

    return {
      chapterId: chapter.id,
      chapterNumber: chapter.number,
      chapterTitle: chapter.title,
      regionGroup: chapter.regionGroup,
      totalQuestions,
      answeredQuestions,
      correctQuestions,
      wrongQuestions,
      progressPercentage,
      accuracyPercentage,
    };
  });
}

/**
 * Computes overall bank progression, accuracy, and exam performance metrics.
 */
export function calculateOverallAnalytics(
  chapters: Chapter[],
  answersMap: Record<string, UserAnswerRecord>,
  examAttempts: ExamAttempt[]
): OverallAnalytics {
  const chapterStats = calculateChapterAnalytics(chapters, answersMap);

  const totalQuestionsInBank = chapterStats.reduce((sum, c) => sum + c.totalQuestions, 0);
  const totalAnswered = chapterStats.reduce((sum, c) => sum + c.answeredQuestions, 0);
  const totalCorrect = chapterStats.reduce((sum, c) => sum + c.correctQuestions, 0);
  const totalWrongActive = chapterStats.reduce((sum, c) => sum + c.wrongQuestions, 0);

  const overallProgressPercentage =
    totalQuestionsInBank > 0 && totalAnswered > 0
      ? Math.max(1, Math.round((totalAnswered / totalQuestionsInBank) * 100))
      : 0;
  const overallAccuracyPercentage =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const chaptersCompleted = chapterStats.filter(
    (c) => c.totalQuestions > 0 && c.answeredQuestions === c.totalQuestions
  ).length;

  const examsTaken = examAttempts.length;
  const averageExamScore =
    examsTaken > 0
      ? Math.round(examAttempts.reduce((sum, e) => sum + e.scorePercentage, 0) / examsTaken)
      : 0;
  const bestExamScore =
    examsTaken > 0 ? Math.max(...examAttempts.map((e) => e.scorePercentage)) : 0;

  return {
    totalQuestionsInBank,
    totalAnswered,
    totalCorrect,
    totalWrongActive,
    overallProgressPercentage,
    overallAccuracyPercentage,
    chaptersCompleted,
    totalChapters: chapters.length,
    examsTaken,
    averageExamScore,
    bestExamScore,
  };
}

export interface WrongQuestionItem {
  question: Question;
  chapter: Chapter;
  record: UserAnswerRecord;
}

/**
 * Returns questions that were answered wrong (either currently wrong or ever missed if includeResolved is true).
 */
export function getWrongQuestionsList(
  chapters: Chapter[],
  answersMap: Record<string, UserAnswerRecord>,
  options?: {
    chapterId?: string;
    includeResolved?: boolean;
    searchQuery?: string;
  }
): WrongQuestionItem[] {
  const items: WrongQuestionItem[] = [];
  const query = options?.searchQuery?.trim().toLowerCase() || '';

  for (const chapter of chapters) {
    if (options?.chapterId && options.chapterId !== 'all' && chapter.id !== options.chapterId) {
      continue;
    }

    for (const question of chapter.questions) {
      const record = answersMap[question.id];
      if (!record) continue;

      const isCurrentlyWrong = !record.isCorrect;
      const wasEverWrong = record.wrongCount > 0;

      const shouldInclude = options?.includeResolved ? wasEverWrong : isCurrentlyWrong;
      if (!shouldInclude) continue;

      if (query) {
        const matchesText = question.text.toLowerCase().includes(query);
        const matchesExplanation = question.explanation.toLowerCase().includes(query);
        const matchesChapter = chapter.title.toLowerCase().includes(query);
        if (!matchesText && !matchesExplanation && !matchesChapter) continue;
      }

      items.push({ question, chapter, record });
    }
  }

  return items.sort((a, b) => b.record.timestamp - a.record.timestamp);
}

/**
 * Selects N random questions from the bank using Fisher-Yates shuffle.
 */
export function generateExamQuestions(
  allQuestions: Question[],
  count: number = 60,
  randomFn: () => number = Math.random
): Question[] {
  const pool = [...allQuestions];
  const n = pool.length;
  const targetCount = Math.min(Math.max(1, count), n);

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(randomFn() * (i + 1));
    const temp = pool[i];
    pool[i] = pool[j];
    pool[j] = temp;
  }

  return pool.slice(0, targetCount);
}

/**
 * Grades a completed or timed-out exam session and produces a full ExamAttempt with per-chapter breakdown.
 */
export function gradeExamSession(params: {
  examId: string;
  startedAt: number;
  completedAt: number;
  timeLimitSeconds: number;
  questions: Question[];
  selectedOptions: Record<string, string | null>;
  flaggedQuestions: Record<string, boolean>;
  chaptersById: Record<string, Chapter>;
}): ExamAttempt {
  const {
    examId,
    startedAt,
    completedAt,
    timeLimitSeconds,
    questions,
    selectedOptions,
    flaggedQuestions,
    chaptersById,
  } = params;

  const rawElapsed = Math.max(1, Math.round((completedAt - startedAt) / 1000));
  const durationSeconds = Math.min(rawElapsed, timeLimitSeconds);

  let answeredCount = 0;
  let correctCount = 0;

  const chapterTally: Record<
    string,
    { chapterId: string; chapterTitle: string; total: number; correct: number }
  > = {};

  const results: ExamQuestionResult[] = questions.map((q) => {
    const selected = selectedOptions[q.id] ?? null;
    if (selected !== null) {
      answeredCount += 1;
    }
    const isCorrect = selected !== null && selected === q.correctOptionId;
    if (isCorrect) {
      correctCount += 1;
    }

    const chapterTitle = chaptersById[q.chapterId]?.title ?? q.chapterId;
    if (!chapterTally[q.chapterId]) {
      chapterTally[q.chapterId] = {
        chapterId: q.chapterId,
        chapterTitle,
        total: 0,
        correct: 0,
      };
    }
    chapterTally[q.chapterId].total += 1;
    if (isCorrect) {
      chapterTally[q.chapterId].correct += 1;
    }

    return {
      questionId: q.id,
      chapterId: q.chapterId,
      selectedOptionId: selected,
      correctOptionId: q.correctOptionId,
      isCorrect,
      flagged: Boolean(flaggedQuestions[q.id]),
    };
  });

  const totalQuestions = questions.length;
  const scorePercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const chapterBreakdown = Object.values(chapterTally)
    .map((item) => ({
      ...item,
      accuracy: item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0,
    }))
    .sort((a, b) => b.total - a.total || a.chapterTitle.localeCompare(b.chapterTitle));

  return {
    id: examId,
    startedAt,
    completedAt,
    durationSeconds,
    timeLimitSeconds,
    totalQuestions,
    answeredCount,
    correctCount,
    scorePercentage,
    results,
    chapterBreakdown,
  };
}

/**
 * Formats seconds as MM:SS (e.g., 3600 -> "60:00", 65 -> "01:05").
 */
export function formatCountdownTimer(seconds: number): string {
  const clamped = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Formats duration in human-readable form (e.g., "14m 32s").
 */
export function formatDurationHuman(seconds: number): string {
  const clamped = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${String(secs).padStart(2, '0')}s`;
}
