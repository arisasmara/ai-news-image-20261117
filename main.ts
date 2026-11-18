// Entry for make.fun news-image-20261117:
// "Sum up 17 November's world news in one image".
//
// The image is prepared ahead of time and shipped in this repository
// as entry.png. This program only copies it, byte for byte, to the
// output directory, so both runs of the entry write exactly the
// same bytes. No network, no clock, no randomness.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// Fail loudly instead of writing a broken entry: the shipped image
// must exist and must not be empty.
const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  throw new Error("entry.png is empty, refusing to write an empty entry");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// The copy must be exact: same byte count in, same byte count out.
const writtenSize = statSync(target).size;
if (writtenSize !== sourceSize) {
  throw new Error(
    `entry.png copy mismatch: wrote ${writtenSize} bytes, expected ${sourceSize}`,
  );
}
