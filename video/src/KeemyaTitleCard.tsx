import { loadFont } from "@remotion/fonts";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Fonts are vendored into public/ so renders do not depend on the Google Fonts CDN.
loadFont({
  family: "Space Grotesk",
  url: staticFile("SpaceGrotesk-Bold.woff2"),
  weight: "700",
});

loadFont({
  family: "Inter",
  url: staticFile("Inter-Regular.woff2"),
  weight: "400",
});

export const KeemyaTitleCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Title card"
      style={{
        backgroundColor: "#07070B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Interactive.Div
        name="Glow"
        style={{
          position: "absolute",
          width: 1600,
          height: 1600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(240,180,60,0.22) 0%, rgba(240,180,60,0.07) 38%, rgba(7,7,11,0) 68%)",
          opacity: interpolate(
            frame,
            [0, 30, durationInFrames - 20, durationInFrames - 2],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [
                Easing.bezier(0.16, 1, 0.3, 1),
                Easing.linear,
                Easing.bezier(0.16, 1, 0.3, 1),
              ],
            },
          ),
          scale: interpolate(frame, [0, 60], [0.75, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
        }}
      >
        <Interactive.Div
          name="Wordmark"
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 210,
            fontWeight: 700,
            letterSpacing: "-8px",
            color: "#F5F5F7",
            opacity: interpolate(
              frame,
              [6, 30, durationInFrames - 20, durationInFrames - 2],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [
                  Easing.bezier(0.16, 1, 0.3, 1),
                  Easing.linear,
                  Easing.bezier(0.16, 1, 0.3, 1),
                ],
              },
            ),
            translate: interpolate(frame, [6, 40], ["0px 34px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          keemya
        </Interactive.Div>

        <Interactive.Div
          name="Domain suffix"
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 210,
            fontWeight: 700,
            letterSpacing: "-8px",
            color: "#F0B43C",
            opacity: interpolate(
              frame,
              [18, 42, durationInFrames - 20, durationInFrames - 2],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [
                  Easing.bezier(0.16, 1, 0.3, 1),
                  Easing.linear,
                  Easing.bezier(0.16, 1, 0.3, 1),
                ],
              },
            ),
            translate: interpolate(frame, [18, 52], ["0px 34px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          .ai
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Divider"
        style={{
          height: 3,
          marginTop: 44,
          marginBottom: 44,
          borderRadius: 2,
          background:
            "linear-gradient(90deg, rgba(240,180,60,0) 0%, rgba(240,180,60,0.9) 50%, rgba(240,180,60,0) 100%)",
          width: interpolate(frame, [34, 64], [0, 300], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          opacity: interpolate(
            frame,
            [34, 50, durationInFrames - 20, durationInFrames - 2],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [
                Easing.bezier(0.16, 1, 0.3, 1),
                Easing.linear,
                Easing.bezier(0.16, 1, 0.3, 1),
              ],
            },
          ),
        }}
      />

      <Interactive.Div
        name="Subtitle"
        style={{
          fontFamily: "Inter",
          fontSize: 72,
          fontWeight: 400,
          letterSpacing: "-1px",
          color: "#8B8B9A",
          opacity: interpolate(
            frame,
            [46, 74, durationInFrames - 20, durationInFrames - 2],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [
                Easing.bezier(0.16, 1, 0.3, 1),
                Easing.linear,
                Easing.bezier(0.16, 1, 0.3, 1),
              ],
            },
          ),
          translate: interpolate(frame, [46, 84], ["0px 22px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        AI systems, custom software, automation
      </Interactive.Div>
    </AbsoluteFill>
  );
};
