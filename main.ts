// The Funniest Honest Appliance Error — make.fun bounty entry.
// The program writes one line to /output/entry.txt: the funniest honest
// error message an appliance could show. A washing machine, flat and
// put-upon, reporting the most honest fault it knows.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Unbalanced load detected. It is one shoe. One. Shoe.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace: refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
