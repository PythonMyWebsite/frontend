import Image from "next/image";
import IntroduceBg from "../../../../public/banner2.png";
import FamerImg from "../../../../public/famer.png";
import { Button } from "@mui/material";

function IntroduceBanner() {
  return (
    <div className="px-52 mt-20">
      <div className="relative">
        <Image alt="" src={IntroduceBg} />
        <div className="absolute top-1/2 -translate-y-1/2 ml-7">
          <h1 className="font-bold text-3xl max-w-96">
            Stay home & get your daily needs from our shop
          </h1>
          <h2 className="mt-2 text-xl text-gray-400">
            Start Your Daily Shopping with Nest Mart
          </h2>
          <div className="relative  mt-3">
            <input
              type="text"
              placeholder="Your mail address"
              className="p-3 rounded-full w-96"
            />
            <Button className="bg-red-500 text-white h-full absolute right-5 rounded-full hover:bg-red-600">
              Subscribe
            </Button>
          </div>
        </div>
        <Image
          alt=""
          src={FamerImg}
          width={500}
          className="absolute right-3 bottom-0"
        />
      </div>
    </div>
  );
}

export default IntroduceBanner;
