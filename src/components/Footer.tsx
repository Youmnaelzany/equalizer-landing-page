import Image from "next/image";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-20">
      <Wrapper className="flex flex-col justify-between gap-8 md:flex-row md:items-end lg:items-center">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start lg:gap-20">
          <Image src="/logo.svg" alt="Logo" width={147} height={33} />
          <div className="">
            <h4 className="text-base leading-[150%] font-normal tracking-normal text-[#191826]">
              All rights reserved © Equalizer 2021
            </h4>
            <h4 className="text-base leading-[150%] font-normal tracking-normal text-[#191826]">
              Have any problems? Contact us via social media or email us at
            </h4>{" "}
            <h4 className="text-base leading-[150%] font-bold tracking-normal text-[#191826]">
              equalizer@example.com
            </h4>
          </div>
        </div>
        <div className="flex max-w-[124px] items-center justify-between gap-4">
          {/* Facebook */}
          <Tooltip>
            <TooltipTrigger>
              <FaFacebookSquare className="size-6 cursor-pointer text-[#191826] transition-colors duration-300 ease-in-out hover:text-[#FA7453]" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Facebook</p>
            </TooltipContent>
          </Tooltip>
          {/* Instagram */}
          <Tooltip>
            <TooltipTrigger>
              <FaInstagram className="size-6 cursor-pointer text-[#191826] transition-colors duration-300 ease-in-out hover:text-[#FA7453]" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          {/* X */}
          <Tooltip>
            <TooltipTrigger>
              <FaXTwitter className="size-6 cursor-pointer text-[#191826] transition-colors duration-300 ease-in-out hover:text-[#FA7453]" />
            </TooltipTrigger>
            <TooltipContent>
              <p>X</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
