import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ALL_CHAPTERS, ALL_QUESTIONS, CHAPTER_BY_ID } from '../data/index';
import {
  calculateChapterAnalytics,
  calculateOverallAnalytics,
  formatCountdownTimer,
  formatDurationHuman,
  generateExamQuestions,
  getWrongQuestionsList,
  gradeExamSession,
  recordQuestionAttempt,
} from './mcqEngine';
import { UserAnswerRecord } from '../types/mcq';

describe('Upper Limb MCQ Bank Dataset Integrity', () => {
  it('contains all 33 chapters and 580 total questions with explanations', () => {
    assert.equal(ALL_CHAPTERS.length, 33, 'Should have exactly 33 chapters');
    assert.equal(ALL_QUESTIONS.length, 580, 'Should have all 580 questions');

    const seenIds = new Set<string>();
    for (const q of ALL_QUESTIONS) {
      assert.ok(!seenIds.has(q.id), `Duplicate question ID: ${q.id}`);
      seenIds.add(q.id);
      assert.ok(q.text.length > 5, `Question ${q.id} text should not be empty`);
      assert.ok(q.options.length >= 4, `Question ${q.id} should have at least 4 options`);
      assert.ok(
        q.options.some((opt) => opt.id === q.correctOptionId),
        `Question ${q.id} correctOptionId (${q.correctOptionId}) must match one of its options`
      );
      assert.ok(
        q.explanation && q.explanation.length > 15,
        `Question ${q.id} must have a detailed explanation`
      );
    }
  });
});

describe('MCQ Engine Pure Logic', () => {
  it('tracks correct and wrong attempts and resolves mistakes on retry', () => {
    const sampleQ = ALL_QUESTIONS[0];
    const wrongOption = sampleQ.options.find((o) => o.id !== sampleQ.correctOptionId)!.id;

    // 1. Answer wrong first
    const r1 = recordQuestionAttempt(undefined, sampleQ, wrongOption, 1000, false);
    assert.equal(r1.isCorrect, false);
    assert.equal(r1.attempts, 1);
    assert.equal(r1.wrongCount, 1);
    assert.equal(r1.resolvedFromMistakes, false);

    // 2. Retry and answer correctly in Mistakes Review
    const r2 = recordQuestionAttempt(r1, sampleQ, sampleQ.correctOptionId, 2000, true);
    assert.equal(r2.isCorrect, true);
    assert.equal(r2.attempts, 2);
    assert.equal(r2.wrongCount, 1);
    assert.equal(r2.resolvedFromMistakes, true);
  });

  it('computes accurate chapter and overall analytics and wrong question lists', () => {
    const ch1 = ALL_CHAPTERS[0]; // 16 questions
    const q1 = ch1.questions[0];
    const q2 = ch1.questions[1];
    const wrongOptQ2 = q2.options.find((o) => o.id !== q2.correctOptionId)!.id;

    const answersMap: Record<string, UserAnswerRecord> = {
      [q1.id]: recordQuestionAttempt(undefined, q1, q1.correctOptionId, 1000),
      [q2.id]: recordQuestionAttempt(undefined, q2, wrongOptQ2, 2000),
    };

    const chAnalytics = calculateChapterAnalytics(ALL_CHAPTERS, answersMap);
    assert.equal(chAnalytics[0].answeredQuestions, 2);
    assert.equal(chAnalytics[0].correctQuestions, 1);
    assert.equal(chAnalytics[0].wrongQuestions, 1);
    assert.equal(chAnalytics[0].accuracyPercentage, 50);

    const overall = calculateOverallAnalytics(ALL_CHAPTERS, answersMap, []);
    assert.equal(overall.totalQuestionsInBank, 580);
    assert.equal(overall.totalAnswered, 2);
    assert.equal(overall.totalCorrect, 1);
    assert.equal(overall.totalWrongActive, 1);
    assert.equal(overall.overallAccuracyPercentage, 50);

    const activeMistakes = getWrongQuestionsList(ALL_CHAPTERS, answersMap);
    assert.equal(activeMistakes.length, 1);
    assert.equal(activeMistakes[0].question.id, q2.id);
  });

  it('generates 60 unique random questions for the Exam Simulator and grades accurately', () => {
    const examQuestions = generateExamQuestions(ALL_QUESTIONS, 60);
    assert.equal(examQuestions.length, 60);
    const uniqueIds = new Set(examQuestions.map((q) => q.id));
    assert.equal(uniqueIds.size, 60);

    // Simulate answering 45 out of 60 correctly, 10 wrong, 5 unanswered
    const selectedOptions: Record<string, string | null> = {};
    examQuestions.forEach((q, idx) => {
      if (idx < 45) {
        selectedOptions[q.id] = q.correctOptionId;
      } else if (idx < 55) {
        selectedOptions[q.id] = q.options.find((o) => o.id !== q.correctOptionId)!.id;
      } else {
        selectedOptions[q.id] = null;
      }
    });

    const graded = gradeExamSession({
      examId: 'exam-test-1',
      startedAt: 1_000_000,
      completedAt: 1_000_000 + 1800 * 1000, // 30 minutes
      timeLimitSeconds: 3600,
      questions: examQuestions,
      selectedOptions,
      flaggedQuestions: { [examQuestions[0].id]: true },
      chaptersById: CHAPTER_BY_ID,
    });

    assert.equal(graded.totalQuestions, 60);
    assert.equal(graded.answeredCount, 55);
    assert.equal(graded.correctCount, 45);
    assert.equal(graded.scorePercentage, 75);
    assert.equal(graded.durationSeconds, 1800);
    assert.ok(graded.chapterBreakdown.length > 0);
  });

  it('formats countdown timer and durations properly', () => {
    assert.equal(formatCountdownTimer(3600), '60:00');
    assert.equal(formatCountdownTimer(65), '01:05');
    assert.equal(formatCountdownTimer(0), '00:00');
    assert.equal(formatDurationHuman(125), '2m 05s');
  });
});
