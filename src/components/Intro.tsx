import Wrapper from "./Wrapper";

const Intro = () => {
  return (
    <section>
      <Wrapper className="space-y-10">
        <h1 className="max-w-[335px] text-[2.5rem] leading-[100%] font-bold tracking-[-1px] text-[#191826] md:max-w-[416px] md:text-[4rem] lg:max-w-[928px] lg:text-[5.5rem]">
          We make your music sound extraordinary.
        </h1>
        <p className="max-w-[335px] text-base leading-[150%] tracking-normal text-[#191826] md:max-w-[504px] md:text-lg lg:max-w-[738px] lg:text-xl">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </Wrapper>
    </section>
  );
};
export default Intro;
