import Image from "next/image";

import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <header className="w-full py-16">
      <Wrapper className="">
        <Image src="/logo.svg" alt="Logo" width={147} height={33} />
      </Wrapper>
    </header>
  );
};
export default Header;
