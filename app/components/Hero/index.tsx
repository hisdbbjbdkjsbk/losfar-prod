import Image from "next/image";
import logo from "@assets/logo.svg";
import "./index.css";

const Hero = () => {
  return (
    <div className="flex gap-24 lg:gap-40 flex-col items-center">
      <div className="relative">
        <div className="left-0 top-0 bottom-0 right-0 w-full h-full z-10 bg-white">
          <Image className="" src={logo} alt="losfar logo" />
        </div>
        <video
          className="mix-blend-overlay absolute left-0 top-0 w-[280px] h-[420px] object-cover z-20 "
          autoPlay
          playsInline
          loop
          muted
        >
          <source src="playground.mp4" type="video/mp4" />
        </video>
      </div>
      <span className="uppercase text-center leading-8 text-base tracking-[22px] md:text-3xl overflow-hidden shimmer-text">
        Coming soon
      </span>
    </div>
  );
};

export default Hero;
