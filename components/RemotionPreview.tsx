"use client";

import { Player } from "@remotion/player";
import { MyComposition } from "@/remotion/MyComposition";

export function RemotionPreview() {
  return (
    <Player
      component={MyComposition}
      durationInFrames={150}
      fps={30}
      compositionWidth={1280}
      compositionHeight={720}
      inputProps={{ title: "Hello, Remotion!" }}
      style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: 16 }}
      controls
      loop
      autoPlay
      acknowledgeRemotionLicense
    />
  );
}
