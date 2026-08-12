import Clock from "@/components/Clock";
import ListenerCount from "@/components/ListenerCount";
import SocialLinks from "@/components/SocialLinks";
import GrainOverlay from "@/components/GrainOverlay";
import Player from "@/components/Player";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* Fixed background */}
      <div className="hero-bg fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/70" />
      </div>

      {/* Fixed grain overlay */}
      <GrainOverlay />

      {/* Top row */}
      <div
        className="fixed inset-x-0 top-0 z-10 flex items-center justify-between"
        style={{
          paddingTop: "max(1rem, env(safe-area-inset-top))",
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <Clock />
        <ListenerCount />
        <SocialLinks />
      </div>

      {/* Fills the remaining space so the player sits pinned to the bottom */}
      <div aria-hidden className="flex-1" />

      <Player />
    </main>
  );
}
