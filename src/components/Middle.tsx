import Image from "next/image";

import Wrapper from "./Wrapper";
import { Button } from "./ui/button";

const Middle = () => {
  return (
    <section className="relative pt-64 md:pb-26 lg:pb-36">
      <Wrapper className="">
        <div className="relative h-[380px] w-full rounded-t-md bg-[#191826] px-6 md:h-[600px] md:rounded-md">
          <Image
            src="/illustration-app.png"
            alt="illustration"
            width={260}
            height={430}
            className="absolute -top-47 left-9 z-50 mx-auto lg:left-43 lg:w-[350px]"
          />
          <Image
            src="/bg-pattern-2.svg"
            alt="pattern"
            width={312}
            height={468}
            className="absolute left-6 z-10 md:left-0 lg:left-114"
          />
        </div>
        {/* Text */}
        <div className="relative z-50 w-full space-y-10 rounded-b-md bg-[#FA7453] px-6 py-12 md:absolute md:top-96 md:right-28 md:w-[350px] md:rounded-md md:px-12 lg:right-43 lg:w-[512px] lg:px-14 lg:py-14">
          <div className="space-y-6">
            <h2 className="text-[40px] leading-[110%] font-bold tracking-normal text-[#191826]">
              Premium EQ
            </h2>
            <p className="w-[280px] max-w-2xl text-base leading-[150%] text-[#191826] md:w-[260px] md:text-lg lg:w-[400px] lg:text-xl">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>
          </div>
          <h3 className="flex items-center gap-4 text-xl leading-[150%] font-normal tracking-normal text-[#191826]">
            <span className="text-[64px] leading-[110%] font-bold">$4</span> /
            month
          </h3>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              type="button"
              size="lg"
              className="w-full bg-[#191826] px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#66E2DC] hover:text-[#191826]"
            >
              iOS Download
            </Button>
            <Button
              type="button"
              size="lg"
              className="w-full bg-white px-8 py-4 text-lg font-bold text-[#191826] transition-colors duration-300 ease-in-out hover:bg-[#FFB964] hover:text-[#191826]"
            >
              Android Download
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Middle;
