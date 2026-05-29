import { useCurrentFrame, interpolate } from "remotion";

interface GlowOrbProps {
  x: string;
  y: string;
  size: number;
  color: string;
  delay?: number;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({
  x,
  y,
  size,
  color,
  delay = 0,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pulse = 1 + Math.sin(frame * 0.03) * 0.08;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size * pulse,
        height: size * pulse,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: opacity * 0.6,
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
  );
};
