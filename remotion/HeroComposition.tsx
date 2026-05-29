import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type HeroCompositionProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  cta: string;
};

export const HeroComposition: React.FC<HeroCompositionProps> = ({
  eyebrow,
  headline,
  subheadline,
  cta,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const gradientShift = interpolate(frame, [0, 180], [0, 100]);

  const words = headline.split(" ");

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${120 + gradientShift * 0.6}deg, #0b0f1a 0%, #1e1b4b 45%, #4c1d95 100%)`,
        color: "white",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <Orb x={width * 0.18} y={height * 0.28} size={420} color="#7c3aed" delay={0} />
      <Orb x={width * 0.82} y={height * 0.72} size={520} color="#06b6d4" delay={6} />
      <Orb x={width * 0.7} y={height * 0.2} size={260} color="#ec4899" delay={12} />

      <Grid />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 80,
          textAlign: "center",
        }}
      >
        <Eyebrow frame={frame} fps={fps}>
          {eyebrow}
        </Eyebrow>

        <h1
          style={{
            margin: "28px 0 0",
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.02,
            maxWidth: 1500,
          }}
        >
          {words.map((word, i) => (
            <Word key={`${word}-${i}`} index={i} frame={frame} fps={fps}>
              {word}
            </Word>
          ))}
        </h1>

        <Subheadline frame={frame} fps={fps} delay={20 + words.length * 4}>
          {subheadline}
        </Subheadline>

        <CTA frame={frame} fps={fps} delay={32 + words.length * 4}>
          {cta}
        </CTA>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Eyebrow: React.FC<{ frame: number; fps: number; children: React.ReactNode }> = ({
  frame,
  fps,
  children,
}) => {
  const progress = spring({ frame, fps, config: { damping: 18 }, durationInFrames: 30 });
  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 12}px)`,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.18)",
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: 2,
        textTransform: "uppercase",
        backdropFilter: "blur(8px)",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "#34d399",
          boxShadow: "0 0 12px #34d399",
        }}
      />
      {children}
    </div>
  );
};

const Word: React.FC<{
  index: number;
  frame: number;
  fps: number;
  children: React.ReactNode;
}> = ({ index, frame, fps, children }) => {
  const delay = 14 + index * 4;
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, stiffness: 110 },
    durationInFrames: 40,
  });
  return (
    <span
      style={{
        display: "inline-block",
        marginRight: 24,
        opacity: progress,
        transform: `translateY(${(1 - progress) * 60}px)`,
        background:
          index === 1
            ? "linear-gradient(90deg, #f0abfc 0%, #818cf8 50%, #22d3ee 100%)"
            : undefined,
        WebkitBackgroundClip: index === 1 ? "text" : undefined,
        WebkitTextFillColor: index === 1 ? "transparent" : undefined,
      }}
    >
      {children}
    </span>
  );
};

const Subheadline: React.FC<{
  frame: number;
  fps: number;
  delay: number;
  children: React.ReactNode;
}> = ({ frame, fps, delay, children }) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20 },
    durationInFrames: 40,
  });
  return (
    <p
      style={{
        marginTop: 32,
        fontSize: 34,
        lineHeight: 1.4,
        maxWidth: 980,
        color: "rgba(255,255,255,0.78)",
        opacity: progress,
        transform: `translateY(${(1 - progress) * 20}px)`,
      }}
    >
      {children}
    </p>
  );
};

const CTA: React.FC<{
  frame: number;
  fps: number;
  delay: number;
  children: React.ReactNode;
}> = ({ frame, fps, delay, children }) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 140 },
    durationInFrames: 40,
  });
  const pulse = 1 + Math.sin((frame - delay) * 0.08) * 0.015;
  return (
    <div
      style={{
        marginTop: 44,
        opacity: progress,
        transform: `scale(${progress * pulse})`,
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: "22px 38px",
        fontSize: 26,
        fontWeight: 600,
        borderRadius: 999,
        background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
        color: "#1e1b4b",
        boxShadow:
          "0 20px 60px rgba(124,58,237,0.45), 0 0 0 1px rgba(255,255,255,0.4) inset",
      }}
    >
      {children}
      <span style={{ fontSize: 22 }}>→</span>
    </div>
  );
};

const Orb: React.FC<{
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}> = ({ x, y, size, color, delay }) => {
  const frame = useCurrentFrame();
  const t = (frame - delay) * 0.02;
  const driftX = Math.sin(t) * 30;
  const driftY = Math.cos(t * 0.8) * 24;
  const appear = interpolate(frame, [delay, delay + 30], [0, 0.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: x - size / 2 + driftX,
        top: y - size / 2 + driftY,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(120px)",
        opacity: appear,
      }}
    />
  );
};

const Grid: React.FC = () => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 40], [0, 0.18], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill
      style={{
        opacity: fade,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }}
    />
  );
};
