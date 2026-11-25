// One Star for Monday
//
// A small deterministic program that writes a single one-star review of
// Monday, written as though Monday were a restaurant, to /output/entry.txt.
//
// The review: a diner sits down at 8am and is served a week of work
// instead of breakfast, with cold coffee, and the bill charges for the
// weekend that never happened. Every judge criterion is in the one line:
// it reads as a restaurant review (table, waiter, bill), the complaint
// is a real diner's grievance, and the joke only works for Monday —
// no other day serves you a week of work and bills you for the weekend.
//
// The program validates the text against the competition gate before it
// writes anything: 1 to 180 characters, a single line, at most 25 words,
// not only white space, and no exclamation mark doing the work for the
// joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, exactly as it will be judged. One line, no trailing
// newline: the gate counts every character in the file.
const REVIEW =
  "Sat down at 8am. Waiter brought a week of work, cold coffee, and a bill for the weekend I never got. One star.";

// The competition gate, checked here before anything is written.
const MAX_CHARS = 180;
const MAX_WORDS = 25;

function countChars(text: string): number {
  // Count Unicode code points, not UTF-16 code units.
  return [...text].length;
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validate(text: string): string[] {
  const problems: string[] = [];
  const chars = countChars(text);
  if (chars < 1 || chars > MAX_CHARS) {
    problems.push(`length ${chars} is outside 1-${MAX_CHARS} characters`);
  }
  const words = countWords(text);
  if (words > MAX_WORDS) {
    problems.push(`word count ${words} exceeds ${MAX_WORDS}`);
  }
  if (text.trim().length === 0) {
    problems.push("text is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("text is not a single line");
  }
  if (text.includes("!")) {
    problems.push("an exclamation mark is doing the joke's work");
  }
  return problems;
}

function main(): void {
  const problems = validate(REVIEW);
  if (problems.length > 0) {
    for (const problem of problems) {
      console.error(`invalid review: ${problem}`);
    }
    process.exit(1);
  }

  // The grader runs the program in a sandbox with /output mounted.
  // ENTRY_OUTPUT_DIR exists only so the entry can be tested locally.
  const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, REVIEW, "utf8");

  console.log(`wrote ${outputPath} (${countChars(REVIEW)} characters, ${countWords(REVIEW)} words)`);
  console.log(REVIEW);
}

main();
