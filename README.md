# মা আসছেন — Maa Aschen

A single-page nostalgia Agomoni radio: bottom-anchored glass player over a
fixed festival-courtyard scene, built with Next.js App Router + TypeScript +
Tailwind v4.

## Run it

```bash
npm install
npm run dev
```

## What's real vs. placeholder

- **`public/bg/scene-wide.png`** — your uploaded hero art, wired in as-is.
- **`public/bg/scene-tall.png`** — currently a copy of the wide image so the
  portrait media query doesn't 404. Replace with a real portrait-composed
  scene (not a crop) when you have one — same filename.
- **`public/covers/default.svg`** — a radio-dial placeholder used for every
  track's spinning "vinyl." Drop per-song art into `public/covers/` and point
  each song's `cover` field in `lib/songs.ts` at it.
- **`public/audio/*.mp3`** — not included. `lib/songs.ts` already has an
  `id`-matched path (e.g. `/audio/bajlo-tomar-alor-benu.mp3`) reserved for
  each of your 20 songs — add files with those exact names and playback works
  immediately. `duration` values are placeholders that get overwritten by the
  real file's metadata once it loads.
- **Listener count** is simulated client-side (drifts randomly) since no
  backend/analytics source was specified — swap the logic in
  `components/ListenerCount.tsx` for a real feed when you have one.
- **Social links** in `components/SocialLinks.tsx` point at placeholder URLs.

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
