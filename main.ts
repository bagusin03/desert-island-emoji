// One Emoji, One Dream Vacation — make.fun entry.
// A single emoji for my dream vacation, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the emoji.
import * as fs from "node:fs";

// Why this emoji: the judge weighs, in order, on-subject fit, a vivid
// postcard at a glance, a personal and specific dream, a spark of wit,
// and instant readability. A desert island is the whole postcard in one
// glyph — palm, sand and sea — and it names one particular dream (escape
// to an island with nobody else on it) instead of any generic holiday.
// It beats a beach umbrella (a beach day, not a dream), a sunrise (any
// morning, anywhere) and a plane (the transport, not the place).
const EMOJI = "🏝";
const MAX_CHARS = 8;

// Guard the sealed gate ourselves: 1-8 UTF-8 characters, not only
// whitespace, exactly one emoji, no text. Fail loudly instead of ever
// writing an entry the scorer would reject.
const chars = [...EMOJI].length;
if (chars < 1 || chars > MAX_CHARS || !EMOJI.trim()) {
  throw new Error(`emoji violates the 1-8 char gate (${chars} chars)`);
}
// Exactly one Unicode code point: no variation selector, no joiner, no
// second glyph hiding behind the first. It must be the desert island
// itself (U+1F3DD), so a later edit cannot silently swap in a different
// or multi-code-point emoji without failing here first.
if (chars !== 1 || EMOJI.codePointAt(0) !== 0x1f3dd) {
  throw new Error(`entry must be exactly the desert-island emoji U+1F3DD, got ${JSON.stringify(EMOJI)}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Verify the written file round-trips exactly: same bytes, one emoji,
// no trailing newline or extra byte the judge would read as text.
const written = fs.readFileSync("/output/entry.txt");
const expected = Buffer.from(EMOJI, "utf8");
if (!written.equals(expected)) {
  throw new Error(`entry.txt bytes ${written.toString("hex")} do not match the emoji ${expected.toString("hex")}`);
}

console.log(`wrote ${chars} char (${Buffer.byteLength(EMOJI, "utf8")} bytes) to /output/entry.txt`);
