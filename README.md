# One image of 17 November 2026

Entry for the make.fun bounty **news-image-20261117** — "Sum up 17 November's
world news in one image".

## The image

`entry.png` is a single 1024 x 1024 editorial poster (JPEG bytes, 279,559
bytes — inside the 1 MiB and 1024 x 1024 gate). Deep navy background, warm
amber accents, white bold labels. A banner across the top names the day in
large letters: **17 NOVEMBER 2026**. Below it, one wide hero panel and a
2 x 3 grid of six panels sum up the day's news.

The seven stories, all events of Tuesday 17 November 2026, verified against
Reuters and other outlets on the day:

1. **CRIMEA BRIDGE HIT** — Ukraine strikes 2nd day, Russia hits Kyiv bridges.
   Ukraine struck the bridge to Crimea a second straight day; the main road
   arch collapsed into the Kerch Strait. Russia hit Kyiv's North and South
   bridges over the Dnipro.
2. **GULF FLARES** — Iran drones hit a US base, US strikes back. Iran fired
   drones at the US radar system at Sheikh Isa base, Bahrain; hours later a
   US jet struck an IRGC missile site on Qeshm Island.
3. **QUAD MEETS IN MANILA** — Trump lands, first summit in 2 years. Trump
   arrived in Manila and met the Quad leaders (India, Japan, Australia) for
   the first leaders' meeting in two years.
4. **JETS SCRAMBLE** — Russian planes breach Japan airspace. Two suspected
   Russian aircraft entered Japanese airspace near Okinoshima; fighters were
   scrambled. First confirmed violation since September 2024.
5. **BANK LEAK: 15M FILES** — Oligarchs, Epstein, Trump tax data. The
   "Inside Deutsche Bank" investigation published 15 million-plus leaked
   files; the bank's shares fell up to 6%.
6. **NVIDIA: RECORD $115.8B** — Board says no to Huang's return. Nvidia
   posted record quarterly revenue of $115.8 billion, up 103%; the board
   said it will not reinstate founder Jensen Huang.
7. **DHONI BOWS OUT** — 19 years, 5 titles, now CSK mentor. MS Dhoni ended
   his IPL playing career after 19 years and became Chennai Super Kings
   team mentor from IPL 2027.

The picture is a flat, stylised illustration — no photographs, no
photorealistic faces, no company logos.

## The program

`main.ts` (Node 22, standard library only) does one thing: it copies the
`entry.png` shipped in this repository, byte for byte, to the output
directory as `entry.png`. It uses no network, no clock and no randomness, so
both runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image lands at `out/entry.png`.

## License

MIT — see `LICENSE`.
