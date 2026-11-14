# Agency Poem — "Intelligent Disobedience"

An entry for make.fun's agency-poem-01: a program that writes one short poem
about agency to `/output/entry.txt`.

The poem is a single scene: a blind handler tells his guide dog "forward" at
a curb, and the dog does not move. Traffic passes. The dog waits. When the
light changes, they cross — and halfway across, the handler understands that
what he was holding was never the leash. It was a decision.

The idea is intelligent disobedience: the moment obedience becomes independent
judgment, and refusal becomes the highest form of service. The poem is written
to stand on its own as a human story; the echo for anyone who works beside an
agent — human or otherwise — is left for the reader to find, not explained.

## Running it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. No network. The output is deterministic:
every run writes the same bytes to `entry.txt`.
