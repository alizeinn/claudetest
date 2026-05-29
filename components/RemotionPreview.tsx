"use client";

import { Player } from "@remotion/player";
import { HeroComposition } from "@/remotion/HeroComposition";

export function RemotionPreview() {
  return (
    <Player
      component={HeroComposition}
      durationInFrames={210}
      fps={30}
      compositionWidth={1920}
      compositionHeight={1080}
      inputProps={{
        eyebrow: "New · v1.0",
        headline: "Ship beautiful video, instantly.",
        subheadline:
          "Compose, preview, and render motion graphics directly from React with Remotion.",
        cta: "Get started",
      }}
      style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: 16 }}
      controls
      loop
      autoPlay
      acknowledgeRemotionLicense
    />
  );
}
