import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  Send,
  Timer,
  XCircle,
} from 'lucide-react';
import { Chapter, ExamAttempt, Question } from '../types/mcq';
import { CHAPTER_BY_ID, QUESTION_BY_ID } from '../data/index';
import {
  formatCountdownTimer,
  formatDurationHuman,
  generateExamQuestions,
  gradeExamSession,
} from '../utils/mcqEngine';

interface ExamSimulatorViewProps {
  allQuestions: Question[];
  chapters: Chapter[];
  examAttempts: ExamAttempt[];
  onCompleteExam: (attempt: ExamAttempt, questions: Question[]) => void;
  onSelectChapter: (chapterId: string) => void;
}

const EXAM_QUESTION_COUNT = 60;
const EXAM_TIME_LIMIT_SECONDS = 60 * 60; // 60 minutes

export const ExamSimulatorView: React.FC<ExamSimulatorViewProps> = ({
  allQuestions,
  examAttempts,
  onCompleteExam,
  onSelectChapter,
}) => {
  const [mode, setMode] = useState<'lobby' | 'active' | 'results'>('lobby');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | null>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [startedAt, setStartedAt] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(EXAM_TIME_LIMIT_SECONDS);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [activeResult, setActiveResult] = useState<ExamAttempt | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct' | 'flagged'>('all');

  const startNewExam = () => {
    const sampled = generateExamQuestions(allQuestions, EXAM_QUESTION_COUNT);
    setExamQuestions(sampled);
    setCurrentIndex(0);
    setSelectedOptions({});
    setFlaggedQuestions({});
    setStartedAt(Date.now());
    setRemainingSeconds(EXAM_TIME_LIMIT_SECONDS);
    setIsPaused(false);
    setShowSubmitModal(false);
    setActiveResult(null);
    setMode('active');
  };

  const finalizeExam = () => {
    const now = Date.now();
    const elapsedByClock = EXAM_TIME_LIMIT_SECONDS - remainingSeconds;
    const syntheticCompletedAt = startedAt + Math.max(1, elapsedByClock) * 1000;

    const attempt = gradeExamSession({
      examId: `exam-${now}`,
      startedAt,
      completedAt: syntheticCompletedAt,
      timeLimitSeconds: EXAM_TIME_LIMIT_SECONDS,
      questions: examQuestions,
      selectedOptions,
      flaggedQuestions,
      chaptersById: CHAPTER_BY_ID,
    });

    setActiveResult(attempt);
    setShowSubmitModal(false);
    setMode('results');
    onCompleteExam(attempt, examQuestions);
  };

  useEffect(() => {
    if (mode !== 'active' || isPaused) return;

    const timer = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [mode, isPaused]);

  useEffect(() => {
    if (mode === 'active' && remainingSeconds === 0 && examQuestions.length > 0) {
      finalizeExam();
    }
  }, [remainingSeconds, mode]);

  const answeredCount = useMemo(
    () => Object.values(selectedOptions).filter((v) => v !== null && v !== undefined).length,
    [selectedOptions]
  );

  const flaggedCount = useMemo(
    () => Object.values(flaggedQuestions).filter(Boolean).length,
    [flaggedQuestions]
  );

  const currentQuestion = examQuestions[currentIndex];

  const filteredReviewResults = useMemo(() => {
    if (!activeResult) return [];
    return activeResult.results.filter((res) => {
      if (reviewFilter === 'wrong') return !res.isCorrect;
      if (reviewFilter === 'correct') return res.isCorrect;
      if (reviewFilter === 'flagged') return res.flagged;
      return true;
    });
  }, [activeResult, reviewFilter]);

  if (mode === 'lobby') {
    return (
      <div className="space-y-8 pb-12">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400">
              <Timer className="w-4 h-4" />
              <span>Official Examination Simulator • Module 101 Upper Limb</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">
              60-Question Randomized Exam Simulator (60:00 Timer)
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Each simulation draws a fresh, randomized selection of{' '}
              <strong className="text-slate-900 dark:text-slate-200 tabular-nums">60 questions</strong>{' '}
              from the entire{' '}
              <strong className="text-slate-900 dark:text-slate-200 tabular-nums">
                {allQuestions.length}-question
              </strong>{' '}
              bank across all 33 chapters under a strict{' '}
              <strong className="text-slate-900 dark:text-slate-200 tabular-nums">60-minute</strong>{' '}
              countdown clock.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  Question Pool
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1 tabular-nums">
                  60 Random MCQs
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Sampled across all 33 chapters
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  Time Allocation
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1 tabular-nums">
                  60:00 Minutes
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  1 minute per question pace
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  Post-Exam Analytics
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  Chapter Breakdown
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Full explanations + mistake logging
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={startNewExam}
                className="inline-flex items-center gap-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white font-semibold px-6 py-3.5 text-sm shadow-sm transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start 60-Question Timed Exam Now</span>
              </button>
            </div>
          </div>
        </div>

        {examAttempts.length > 0 && (
          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
              Previous Simulated Exams ({examAttempts.length})
            </h2>
            <div className="space-y-3">
              {examAttempts.map((attempt, idx) => (
                <div
                  key={attempt.id}
                  className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30"
                >
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Exam #{examAttempts.length - idx} •{' '}
                      <span
                        className={`tabular-nums ${
                          attempt.scorePercentage >= 60
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {attempt.scorePercentage}% ({attempt.correctCount}/{attempt.totalQuestions})
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums mt-0.5">
                      {new Date(attempt.completedAt).toLocaleString()} • Duration:{' '}
                      {formatDurationHuman(attempt.durationSeconds)} • Answered:{' '}
                      {attempt.answeredCount}/{attempt.totalQuestions}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveResult(attempt);
                      setMode('results');
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:border-teal-500 transition-colors cursor-pointer"
                  >
                    <span>Inspect Report & Explanations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'active' && currentQuestion) {
    const selectedOptionId = selectedOptions[currentQuestion.id] ?? null;
    const isFlagged = Boolean(flaggedQuestions[currentQuestion.id]);
    const isLowTime = remainingSeconds <= 300;

    return (
      <div className="space-y-6 pb-12">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-base sm:text-lg font-bold tabular-nums border ${
                  isLowTime
                    ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100'
                }`}
              >
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{formatCountdownTimer(remainingSeconds)}</span>
              </div>

              <button
                onClick={() => setIsPaused((p) => !p)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-teal-600" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs tabular-nums">
              <span className="text-slate-600 dark:text-slate-300">
                Answered: <strong>{answeredCount}</strong> / {examQuestions.length}
              </span>
              <span className="text-amber-600 dark:text-amber-400">
                Flagged: <strong>{flaggedCount}</strong>
              </span>
              <button
                onClick={() => setShowSubmitModal(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-sans font-semibold px-4 py-2.5 text-xs shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Exam</span>
              </button>
            </div>
          </div>

          <div className="mt-4 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-300"
              style={{
                width: `${(answeredCount / examQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 tabular-nums">
                  Exam Question {currentIndex + 1} of {examQuestions.length}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 ml-2">
                  • {CHAPTER_BY_ID[currentQuestion.chapterId]?.title}
                </span>
              </div>

              <button
                onClick={() =>
                  setFlaggedQuestions((prev) => ({
                    ...prev,
                    [currentQuestion.id]: !prev[currentQuestion.id],
                  }))
                }
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                  isFlagged
                    ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-amber-400'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
                <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
              </button>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50 leading-relaxed mb-6">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() =>
                      setSelectedOptions((prev) => ({
                        ...prev,
                        [currentQuestion.id]: opt.id,
                      }))
                    }
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                      isSelected
                        ? 'border-teal-600 dark:border-teal-500 bg-teal-50/70 dark:bg-teal-950/40 text-slate-900 dark:text-slate-50 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-teal-500/60 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg border text-xs font-mono font-bold uppercase flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-teal-600 border-teal-600 text-white'
                          : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentIndex < examQuestions.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrentIndex((i) => Math.min(examQuestions.length - 1, i + 1))
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-2.5 text-xs font-semibold hover:opacity-90 cursor-pointer"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 text-xs font-semibold cursor-pointer"
                >
                  <span>Review & Submit Exam</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-5 shadow-xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              60-Question Navigator Palette
            </h3>
            <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-6 gap-1.5">
              {examQuestions.map((q, idx) => {
                const isAnswered = Boolean(selectedOptions[q.id]);
                const isFlaggedItem = Boolean(flaggedQuestions[q.id]);
                const isCurrent = idx === currentIndex;

                let cellStyle =
                  'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent';
                if (isAnswered) {
                  cellStyle = 'bg-teal-600 text-white border-teal-600 font-semibold';
                }
                if (isFlaggedItem) {
                  cellStyle =
                    'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-400 font-semibold';
                }
                if (isCurrent) {
                  cellStyle += ' ring-2 ring-slate-900 dark:ring-white';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg border text-xs font-mono tabular-nums transition-all cursor-pointer ${cellStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-teal-600 inline-block" />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-slate-200 dark:bg-slate-700 inline-block" />
                <span>Unanswered ({examQuestions.length - answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-amber-400 inline-block" />
                <span>Flagged ({flaggedCount})</span>
              </div>
            </div>
          </div>
        </div>

        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Submit 60-Question Exam?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                You have answered{' '}
                <strong className="text-slate-900 dark:text-slate-100 tabular-nums">
                  {answeredCount} of {examQuestions.length}
                </strong>{' '}
                questions with{' '}
                <strong className="text-slate-900 dark:text-slate-100 tabular-nums">
                  {formatCountdownTimer(remainingSeconds)}
                </strong>{' '}
                remaining on the clock.
                {answeredCount < examQuestions.length &&
                  ` (${examQuestions.length - answeredCount} unanswered questions will be marked incorrect.)`}
              </p>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Return to Exam
                </button>
                <button
                  onClick={finalizeExam}
                  className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  Confirm & Grade Exam
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'results' && activeResult) {
    const passed = activeResult.scorePercentage >= 60;

    return (
      <div className="space-y-8 pb-12">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400">
                <Award className="w-4 h-4" />
                <span>Simulated Exam Report & Chapter Analytics</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mt-1">
                Final Score:{' '}
                <span
                  className={`tabular-nums ${
                    passed
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {activeResult.scorePercentage}% ({activeResult.correctCount} /{' '}
                  {activeResult.totalQuestions})
                </span>
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-mono tabular-nums">
                Time Taken: {formatDurationHuman(activeResult.durationSeconds)} • Answered:{' '}
                {activeResult.answeredCount}/{activeResult.totalQuestions} • Any wrong answers have been added to your Mistakes Bank.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={startNewExam}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold px-5 py-3 text-xs shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Take Another 60-Question Exam</span>
              </button>
              <button
                onClick={() => setMode('lobby')}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                <span>Back to Exam Lobby</span>
              </button>
            </div>
          </div>

          <div className="mt-7 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">
              Chapter-by-Chapter Performance Breakdown ({activeResult.chapterBreakdown.length} Chapters Tested)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeResult.chapterBreakdown.map((cb) => (
                <div
                  key={cb.chapterId}
                  onClick={() => onSelectChapter(cb.chapterId)}
                  className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-teal-500 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {cb.chapterTitle}
                    </span>
                    <span
                      className={`font-mono font-bold tabular-nums shrink-0 ${
                        cb.accuracy >= 75
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : cb.accuracy >= 50
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {cb.correct}/{cb.total} ({cb.accuracy}%)
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className={`h-full ${
                        cb.accuracy >= 75
                          ? 'bg-emerald-500'
                          : cb.accuracy >= 50
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${cb.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Detailed Question & Explanation Review ({filteredReviewResults.length})
            </h2>
            <div className="flex items-center gap-2">
              {(['all', 'wrong', 'correct', 'flagged'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setReviewFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize cursor-pointer ${
                    reviewFilter === f
                      ? 'bg-teal-600 text-white'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {f === 'all' ? `All (${activeResult.totalQuestions})` : f}
                </button>
              ))}
            </div>
          </div>

          {filteredReviewResults.map((res, idx) => {
            const q = QUESTION_BY_ID[res.questionId];
            if (!q) return null;
            const ch = CHAPTER_BY_ID[q.chapterId];

            return (
              <div
                key={res.questionId}
                className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">
                    Item #{idx + 1} • {ch?.title}
                  </span>
                  {res.isCorrect ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Correct (Option {res.correctOptionId.toUpperCase()})</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-rose-600 dark:text-rose-400">
                      <XCircle className="w-4 h-4" />
                      <span>
                        {res.selectedOptionId
                          ? `Incorrect (You chose ${res.selectedOptionId.toUpperCase()}, Correct: ${res.correctOptionId.toUpperCase()})`
                          : `Unanswered (Correct: ${res.correctOptionId.toUpperCase()})`}
                      </span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  {q.text}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  {q.options.map((opt) => {
                    const isCorrectOpt = opt.id === q.correctOptionId;
                    const isUserChoice = opt.id === res.selectedOptionId;
                    let cls =
                      'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400';
                    if (isCorrectOpt) {
                      cls =
                        'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 font-semibold';
                    } else if (isUserChoice && !isCorrectOpt) {
                      cls =
                        'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${cls}`}
                      >
                        <span className="font-mono font-bold uppercase">{opt.id}.</span>
                        <span>{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-teal-200 dark:border-teal-900/70 bg-teal-50/50 dark:bg-teal-950/30 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-teal-800 dark:text-teal-300 mb-1">
                    <Lightbulb className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Anatomical Explanation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
