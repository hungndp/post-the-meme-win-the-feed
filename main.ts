/* post-the-meme-win-the-feed — entry program (main.ts).
 *
 * The entry itself is the X post: the meme picture plus its text, which
 * the house reads from X. This program has exactly one job — hand the
 * post's address to the grader by copying POST.json from the
 * repository root (MAKEFUN_BOT_DIR, /bot in the grader) into the
 * output directory (MAKEFUN_OUTPUT_DIR, /output in the grader).
 *
 * Node 22 standard library only. No network, no clock, and nothing
 * outside those two directories, so two runs write the same bytes.
 */

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never delete it: in
// the grader it is a mounted volume, and removing it fails the run.
mkdirSync(outDir, { recursive: true });

// The hand-off, as one named step: the post's address is the whole
// entry, so the copy is the whole program. Keeping it a function
// keeps the top level to directory setup plus one call.
function handOverPostAddress(): void {
  try {
    copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
  } catch (err) {
    // Silent on success; on failure, say what was being copied and
    // stop with a non-zero exit so the run is marked failed, not
    // half-done.
    console.error(
      `could not copy POST.json from ${botDir} to ${outDir}: ${(err as Error).message}`,
    );
    process.exit(1);
  }
}

handOverPostAddress();
