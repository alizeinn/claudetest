import { useCurrentFrame, interpolate } from "remotion";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: (i * 137.5) % 100,
  y: (i * 73.3) % 100,
  size: 2 + (i % 4),
  speed: 0.15 + (i % 5) * 0.08,
  opacity: 0.15 + (i % 4) * 0.1,
  delay: i * 4,
}));

export const ParticleBackground: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {PARTICLES.map((p) => {
        const drift = (frame * p.speed) % 100;
        const floatY = Math.sin((frame + p.delay) * 0.02) * 8;
        const opacity = interpolate(
          frame,
          [p.delay, p.delay + 30],
          [0, p.opacity],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${(p.x + drift * 0.1) % 100}%`,
              top: `${p.y + floatY * 0.1}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "rgba(139, 92, 246, 0.8)",
              opacity,
              boxShadow: `0 0 ${p.size * 3}px rgba(139, 92, 246, 0.5)`,
            }}
          />
        );
      })}

      {/* Grid lines */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(139,92,246,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};
