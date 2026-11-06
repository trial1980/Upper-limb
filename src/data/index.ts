import { Chapter, Question } from '../types/mcq';
import { chaptersPart1 } from './chaptersPart1';
import { chaptersPart2 } from './chaptersPart2';
import { CHAPTERS_PART_3 } from './chaptersPart3';
import { CHAPTERS_PART_4 } from './chaptersPart4';

export const ALL_CHAPTERS: Chapter[] = [
  ...chaptersPart1,
  ...chaptersPart2,
  ...CHAPTERS_PART_3,
  ...CHAPTERS_PART_4,
].sort((a, b) => a.number - b.number);

export const ALL_QUESTIONS: Question[] = ALL_CHAPTERS.flatMap((chapter) => chapter.questions);

export const CHAPTER_BY_ID: Record<string, Chapter> = Object.fromEntries(
  ALL_CHAPTERS.map((chapter) => [chapter.id, chapter])
);

export const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(
  ALL_QUESTIONS.map((question) => [question.id, question])
);

export const REGION_GROUPS: Chapter['regionGroup'][] = [
  'Shoulder & Axilla',
  'Arm & Cubital Fossa',
  'Forearm & Wrist',
  'Hand & Nerves',
  'Vessels, Lymphatics & Joints',
];
