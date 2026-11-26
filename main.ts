import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";

const LINE_PARTS: string[] = [
  "Sorry I ate the quarterly report — ",
  "it tasted of cheap paper, and frankly, ",
  "the staples started it.",
];

const LINE: string = LINE_PARTS.join("");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
