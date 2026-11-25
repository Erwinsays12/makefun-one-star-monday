# One Star for Monday

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/Erwinsays12/makefun-one-star-monday/rank.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/Erwinsays12/makefun-one-star-monday/reward.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)

An entry for the [One Star for Monday](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one one-star review of Monday, written as though Monday
were a restaurant, to `/output/entry.txt`. The diner sits down at 8am and
is served a week of work instead of breakfast, with cold coffee — and the
bill charges for the weekend that never happened.

## The review

> Sat down at 8am. Waiter brought a week of work, cold coffee, and a bill for the weekend I never got. One star.

23 words, 110 characters, one line, no trailing newline.

## Run it

```sh
node main.ts
```

The program first checks the review against the competition gate (1 to
180 characters, at most 25 words, a single line, not only white space, no
exclamation mark doing the joke's work), then writes it to
`/output/entry.txt` with no trailing newline. Set `ENTRY_OUTPUT_DIR` to
write somewhere else when testing locally.

## License

MIT — see [LICENSE](LICENSE).
