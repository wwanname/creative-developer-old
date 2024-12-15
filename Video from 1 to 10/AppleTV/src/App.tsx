import "./styles.css";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Usps } from "./components/usps";
import { VideoCarousel } from "./components/video-carousel";

function App() {
  return (
    <>
      <Header />
      <div className="bg-background relative z-10">
        <Hero />
        <Usps />
      </div>
      <VideoCarousel />
    </>
  );
}

export default App;
