// An agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// about a guide dog that refuses a command, to /output/entry.txt.
// The poem is the whole entry: no input, no network, the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'He says forward.',
  'The dog does not move.',
  '',
  'A bus goes by, then a truck,',
  'the whole loud world going where it was told.',
  '',
  'His cane finds the curb. Taps it. Taps again.',
  'The dog sits in the harness and waits.',
  '',
  'He thinks she has forgotten.',
  'Her ears are still on the traffic.',
  '',
  'The light changes. She stands.',
  'They cross, his hand on the harness,',
  'her eyes on the road —',
  '',
  'and halfway across —',
  'he never held the leash.',
  'He held a decision.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
