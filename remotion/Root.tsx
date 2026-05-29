import { Composition } from "remotion";
import { MyComposition } from "./MyComposition";
import { HeroComposition } from "./HeroComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Hero"
        component={HeroComposition}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          eyebrow: "New · v1.0",
          headline: "Ship beautiful video, instantly.",
          subheadline:
            "Compose, preview, and render motion graphics directly from React with Remotion.",
          cta: "Get started",
        }}
      />
      <Composition
        id="MyVideo"
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{ title: "Hello, Remotion!" }}
      />
    </>
  );
};
