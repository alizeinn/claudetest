import { Composition } from "remotion";
import { KeemyaTitleCard } from "./KeemyaTitleCard";

export const MyComposition = () => {
  return (
    <Composition
      id="KeemyaTitleCard"
      component={KeemyaTitleCard}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
