import { Container } from "../children/container";
import { FadeIn } from "../children/fade-in";

export const Usps = () => {
  return (
    <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold md:text-4xl">
      <FadeIn className="text-[snow]">
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn className="text-[snow]">
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn className="text-[snow]">
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn className="text-[snow]">
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
