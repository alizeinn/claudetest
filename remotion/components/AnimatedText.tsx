import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [delay, delay + 25], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <span
      style={{
        display: "inline-block",
        opacity,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {text}
    </span>
  );
};

interface WordByWordProps {
  text: string;
  startFrame?: number;
  stagger?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
}

export const WordByWord: React.FC<WordByWordProps> = ({
  text,
  startFrame = 0,
  stagger = 5,
  style = {},
  wordStyle = {},
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  return (
    <span style={{ display: "inline", ...style }}>
      {words.map((word, i) => {
        const delay = startFrame + i * stagger;
        const opacity = interpolate(frame, [delay, delay + 18], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const translateY = interpolate(frame, [delay, delay + 18], [30, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              marginRight: "0.28em",
              opacity,
              transform: `translateY(${translateY}px)`,
              ...wordStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
};

interface CounterProps {
  from: number;
  to: number;
  startFrame?: number;
  duration?: number;
  suffix?: string;
  style?: React.CSSProperties;
}

export const Counter: React.FC<CounterProps> = ({
  from,
  to,
  startFrame = 0,
  duration = 60,
  suffix = "",
  style = {},
}) => {
  const frame = useCurrentFrame();
  const value = Math.round(
    interpolate(frame, [startFrame, startFrame + duration], [from, to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <span style={{ opacity, ...style }}>
      {value}
      {suffix}
    </span>
  );
};
