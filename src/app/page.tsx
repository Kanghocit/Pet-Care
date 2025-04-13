import Carousel from "./components/carousel";
import Banner from "./components/banner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Carousel />
      <Banner />
    </div>
  );
}
