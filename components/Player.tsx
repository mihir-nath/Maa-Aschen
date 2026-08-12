"use client";

import { usePlayer, formatTime } from "@/lib/usePlayer";
import { PrevIcon, NextIcon, PlayIcon, PauseIcon } from "./icons";
import type { ChangeEvent } from "react";

const GLASS =
  "border border-white/10 bg-gradient-to-b from-white/[0.15] to-white/[0.055] backdrop-blur-3xl backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]";

function Vinyl({
  cover,
  isPlaying,
  size,
}: {
  cover: string;
  isPlaying: boolean;
  size: number;
}) {
  return (
    <div
      className="relative shrink-0 rounded-full animate-vinyl-spin"
      style={{
        width: size,
        height: size,
        animationPlayState: isPlaying ? "running" : "paused",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cover}
        alt=""
        aria-hidden
        className="h-full w-full rounded-full object-cover ring-1 ring-white/15"
      />
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40"
      />
    </div>
  );
}

function SeekBar({
  currentTime,
  duration,
  onSeek,
}: {
  currentTime: number;
  duration: number;
  onSeek: (v: number) => void;
}) {
  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSeek(Number(e.target.value));
  };

  return (
    <div className="group/seek relative h-6 w-full">
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-marigold shadow-[0_0_10px_2px_rgba(224,166,57,0.55)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full bg-ivory opacity-0 shadow-[0_0_6px_rgba(0,0,0,0.5)] transition-opacity group-hover/seek:opacity-100"
        style={{ left: `${pct}%` }}
      />
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={currentTime}
        onChange={handleChange}
        aria-label="Seek"
        className="absolute inset-0 h-6 w-full cursor-pointer appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}

function Transport({
  isPlaying,
  onPrev,
  onToggle,
  onNext,
  size = "md",
}: {
  isPlaying: boolean;
  onPrev: () => void;
  onToggle: () => void;
  onNext: () => void;
  size?: "md" | "lg";
}) {
  const playBtn =
    size === "lg"
      ? "h-14 w-14"
      : "h-10 w-10";
  const iconBtn = "h-9 w-9 text-ivory/80 transition-colors hover:text-marigold";
  const playIcon = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous track"
        className={`flex items-center justify-center rounded-full ${iconBtn}`}
      >
        <PrevIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onToggle}
        aria-label={isPlaying ? "Pause" : "Play"}
        className={`flex ${playBtn} items-center justify-center rounded-full bg-marigold text-dusk shadow-[0_4px_16px_-4px_rgba(224,166,57,0.7)] transition-transform hover:scale-105 active:scale-95`}
      >
        {isPlaying ? <PauseIcon className={playIcon} /> : <PlayIcon className={playIcon} />}
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next track"
        className={`flex items-center justify-center rounded-full ${iconBtn}`}
      >
        <NextIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function Player() {
  const {
    audioRef,
    track,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    next,
    prev,
    seek,
  } = usePlayer();

  return (
    <div className="relative z-10 w-full max-w-xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <audio ref={audioRef} src={track.src} preload="metadata" />

      {/* ---------------------------- DESKTOP ---------------------------- */}
      <div className={`hidden sm:flex items-center gap-4 rounded-full p-3 pr-5 ${GLASS}`}>
        <Vinyl cover={track.cover} isPlaying={isPlaying} size={80} />

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="min-w-0">
            <p className="truncate font-display text-[15px] font-semibold text-ivory">
              {track.title}
            </p>
            <p className="truncate text-[12.5px] text-white/70">{track.titleRoman}</p>
          </div>
          <SeekBar currentTime={currentTime} duration={duration} onSeek={seek} />
          <div className="flex justify-between font-mono text-[10.5px] tabular-nums text-white/60">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <Transport isPlaying={isPlaying} onPrev={prev} onToggle={togglePlay} onNext={next} />
      </div>

      {/* ----------------------------- MOBILE ----------------------------- */}
      <div className={`sm:hidden flex flex-col items-center gap-3 rounded-3xl p-5 ${GLASS}`}>
        <Vinyl cover={track.cover} isPlaying={isPlaying} size={112} />

        <div className="w-full min-w-0 text-center">
          <p className="truncate font-display text-base font-semibold text-ivory">
            {track.title}
          </p>
          <p className="truncate text-[13px] text-white/70">{track.titleRoman}</p>
        </div>

        <div className="w-full">
          <SeekBar currentTime={currentTime} duration={duration} onSeek={seek} />
          <div className="flex justify-between font-mono text-[10.5px] tabular-nums text-white/60">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <Transport
          isPlaying={isPlaying}
          onPrev={prev}
          onToggle={togglePlay}
          onNext={next}
          size="lg"
        />
      </div>
    </div>
  );
}
