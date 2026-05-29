import { Composition } from "remotion";
import { HeroSection } from "./compositions/HeroSection";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KeemyaHero"
        component={HeroSection}
        durationInFrames={210}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
