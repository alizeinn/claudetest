import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
  Sequence,
} from "remotion";
import { WordByWord, AnimatedText, Counter } from "../components/AnimatedText";
import { ParticleBackground } from "../components/ParticleBackground";
import { GlowOrb } from "../components/GlowOrb";

const Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 900,
          color: "#fff",
          boxShadow: "0 0 24px rgba(139,92,246,0.6)",
          fontFamily: "sans-serif",
        }}
      >
        K
      </div>
      <span
        style={{
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 26,
          letterSpacing: "0.02em",
          color: "#fff",
        }}
      >
        keemya<span style={{ color: "#8B5CF6" }}>.net</span>
      </span>
    </div>
  );
};

const Badge: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [delay, delay + 20], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(139,92,246,0.15)",
        border: "1px solid rgba(139,92,246,0.4)",
        borderRadius: 999,
        padding: "6px 16px",
        fontSize: 13,
        fontWeight: 600,
        color: "#C4B5FD",
        fontFamily: "sans-serif",
        letterSpacing: "0.05em",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#8B5CF6",
          boxShadow: "0 0 8px #8B5CF6",
          display: "inline-block",
        }}
      />
      {text}
    </span>
  );
};

const StatCard: React.FC<{
  value: number;
  suffix: string;
  label: string;
  delay: number;
}> = ({ value, suffix, label, delay }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [delay, delay + 25], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 800,
          color: "#fff",
          fontFamily: "sans-serif",
          lineHeight: 1,
        }}
      >
        <Counter
          from={0}
          to={value}
          startFrame={delay + 10}
          duration={50}
          suffix={suffix}
        />
      </div>
      <div
        style={{
          fontSize: 13,
          color: "#94A3B8",
          fontFamily: "sans-serif",
          marginTop: 4,
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const CTAButton: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [delay, delay + 20], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
          borderRadius: 12,
          padding: "14px 32px",
          fontSize: 15,
          fontWeight: 700,
          color: "#fff",
          fontFamily: "sans-serif",
          boxShadow: "0 8px 32px rgba(139,92,246,0.4)",
          letterSpacing: "0.02em",
          cursor: "pointer",
        }}
      >
        Start Your Project →
      </div>
      <div
        style={{
          background: "transparent",
          border: "1.5px solid rgba(255,255,255,0.2)",
          borderRadius: 12,
          padding: "14px 32px",
          fontSize: 15,
          fontWeight: 600,
          color: "rgba(255,255,255,0.8)",
          fontFamily: "sans-serif",
          letterSpacing: "0.02em",
          cursor: "pointer",
        }}
      >
        View Our Work
      </div>
    </div>
  );
};

const FloatingCard: React.FC<{
  x: string;
  y: string;
  delay: number;
  icon: string;
  title: string;
  subtitle: string;
}> = ({ x, y, delay, icon, title, subtitle }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [delay, delay + 30], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const float = Math.sin(frame * 0.025 + delay * 0.1) * 6;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity,
        transform: `translateY(${translateY + float}px)`,
        background: "rgba(15,15,30,0.8)",
        border: "1px solid rgba(139,92,246,0.25)",
        borderRadius: 16,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        minWidth: 200,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "rgba(139,92,246,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "sans-serif",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#7C3AED",
            fontFamily: "sans-serif",
            marginTop: 2,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #020010 0%, #0A0018 50%, #050015 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background layer */}
      <div style={{ opacity: bgOpacity }}>
        <GlowOrb x="15%" y="25%" size={600} color="#4C1D95" delay={0} />
        <GlowOrb x="80%" y="60%" size={500} color="#3730A3" delay={10} />
        <GlowOrb x="50%" y="10%" size={300} color="#7C3AED" delay={5} />
        <ParticleBackground />
      </div>

      {/* Floating UI cards (right side decoration) */}
      <FloatingCard
        x="62%"
        y="18%"
        delay={80}
        icon="🚀"
        title="Campaign Live"
        subtitle="+340% reach this week"
      />
      <FloatingCard
        x="65%"
        y="52%"
        delay={95}
        icon="📈"
        title="Revenue Growth"
        subtitle="↑ 128% vs last month"
      />
      <FloatingCard
        x="58%"
        y="72%"
        delay={110}
        icon="✨"
        title="Brand Refresh"
        subtitle="Delivered in 7 days"
      />

      {/* Main content */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 0,
          bottom: 0,
          width: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
        }}
      >
        {/* Logo */}
        <Sequence from={0} durationInFrames={300}>
          <Logo />
        </Sequence>

        {/* Badge */}
        <Badge text="DIGITAL MARKETING AGENCY" delay={20} />

        {/* Headline */}
        <div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.1,
              fontFamily: "sans-serif",
              color: "#fff",
              marginBottom: 8,
            }}
          >
            <WordByWord
              text="We Grow Brands"
              startFrame={30}
              stagger={6}
              wordStyle={{ display: "inline-block" }}
            />
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.1,
              fontFamily: "sans-serif",
            }}
          >
            <WordByWord
              text="That Matter"
              startFrame={54}
              stagger={7}
              wordStyle={{
                display: "inline-block",
                background: "linear-gradient(90deg, #8B5CF6 0%, #6366F1 50%, #A78BFA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
          </div>
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: 17,
            color: "#94A3B8",
            fontFamily: "sans-serif",
            lineHeight: 1.7,
            maxWidth: 480,
          }}
        >
          <WordByWord
            text="From strategy to execution — we craft digital experiences that drive real results for ambitious brands."
            startFrame={75}
            stagger={3}
          />
        </div>

        {/* CTA Buttons */}
        <CTAButton delay={110} />

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 8,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <StatCard value={150} suffix="+" label="Clients Served" delay={125} />
          <StatCard value={98} suffix="%" label="Satisfaction Rate" delay={135} />
          <StatCard value={12} suffix="x" label="Avg. ROI" delay={145} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
