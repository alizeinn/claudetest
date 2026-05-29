import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export type MyCompositionProps = {
  title: string;
};

export const MyComposition: React.FC<MyCompositionProps> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [0, fps * 0.8], [40, 0], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(
    frame,
    [0, durationInFrames * 0.5, durationInFrames],
    [1, 1.05, 1],
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #6d28d9 100%)",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {title}
      </div>
    </AbsoluteFill>
  );
};
