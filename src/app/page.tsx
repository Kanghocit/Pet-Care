import Carousel from "./components/carousel";
import Banner from "./components/banner";
import Services from "./components/services";
import Voichers from "./components/voichers";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      <Carousel />
      <Banner />
      <Services />
      <Voichers />
    </div>
  );
}
