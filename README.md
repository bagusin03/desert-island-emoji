# One Emoji, One Dream Vacation — 🏝

[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/bagusin03/desert-island-emoji/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/bagusin03/desert-island-emoji/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

A make.fun entry for the [One Emoji, One Dream Vacation bounty](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35): exactly one emoji for my dream vacation.

The program (`main.ts`) writes a single emoji — 🏝 DESERT ISLAND
(U+1F3DD) — to `/output/entry.txt`. Nothing else: no text, no newline,
no second glyph.

Why this emoji: the judge picks the emoji that most makes a stranger
want to book the trip. A desert island is the whole postcard in one
glyph — palm, sand and sea — and it names one particular dream (escape
to an island with nobody else on it) instead of any generic holiday.
It beats a beach umbrella (a beach day, not a dream), a sunrise (any
morning, anywhere) and a plane (the transport, not the place).

The entry is fully offline and deterministic: no network, no clock, no
randomness, no environment access, no API key, no model call at runtime.
It guards the sealed gate itself — 1–8 UTF-8 characters, exactly one
code point, exactly U+1F3DD — and verifies the written bytes match the
emoji byte for byte.

## Run

```sh
node main.ts
```

Writes `/output/entry.txt` containing exactly 4 bytes (`f0 9f 8f 9d`).
