# মা আসছেন — Maa Aschen

A single-page nostalgia Agomoni radio: bottom-anchored glass player over a
fixed festival-courtyard scene, built with Next.js App Router + TypeScript +
Tailwind v4.

## Run it

```bash
npm install
npm run dev
```

## Structure

```
app/
  layout.tsx      — fonts, viewportFit: "cover", Analytics/SpeedInsights
  page.tsx         — assembles bg, grain, top row, player
  globals.css      — Tailwind v4 @theme tokens, keyframes
components/
  Player.tsx       — desktop pill (hidden sm:flex) + mobile card (sm:hidden)
  Clock.tsx / ListenerCount.tsx / SocialLinks.tsx
  GrainOverlay.tsx
  icons.tsx        — hand-rolled transport icons (no icon dependency)
lib/
  songs.ts         — your 20-song playlist
  usePlayer.ts      — shared playback state/logic for both player blocks
```

## Design tokens

Defined in `app/globals.css` under `@theme`:

- `--color-dusk #1a120c`, `--color-ember #b8451f`, `--color-marigold #e0a639`,
  `--color-sindoor #9c2b3c`, `--color-ivory #f3ead8`, `--color-brass #8c6a3f`
- Display: **Tiro Bangla** (Bengali-aware serif, titles) · Body/UI:
  **Hind Siliguri** · Utility/numerals: **IBM Plex Mono** (clock, elapsed/duration)
