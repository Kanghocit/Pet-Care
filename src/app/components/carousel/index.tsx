"use client";

import { Carousel } from "antd";

// Carousel content style
const contentStyle: React.CSSProperties = {
  height: "700px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  position: "relative",
};

const App: React.FC = () => (
  <Carousel
    arrows
    infinite={true}
    autoplay={{ dotDuration: true }}
    autoplaySpeed={2000}
  >
    <div>
      <img
        src="/images/home_slider_1.webp"
        alt="Image 1"
        style={contentStyle}
      />
    </div>
    <div>
      <img
        src="/images/home_slider_1.webp"
        alt="Image 2"
        style={contentStyle}
      />
    </div>
    <div>
      <img
        src="/images/home_slider_1.webp"
        alt="Image 2"
        style={contentStyle}
      />
    </div>
  </Carousel>
);

export default App;
