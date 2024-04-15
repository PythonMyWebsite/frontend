import Image from "next/image";
import Logo from "../../../../public/logo.png";
import LocationIcon from "../../../../public/location.png";
import EmailIcon from "../../../../public/email-icon.png";
import PhoneIcon from "../../../../public/phone-icon.png";
import FacebookIcon from "../../../../public/facebook-icon.png";
import TwitterIcon from "../../../../public/twitterx-icon.png";
import InstagramIcon from "../../../../public/intagram.png";
import WorldIcon from "../../../../public/world-icon.png";
import Link from "next/link";

const categoryList = [
  "Dairy & Bakery",
  "Fruits & Vegetable",
  "Snack & Spice",
  "Juice & Drinks",
  "Fast Food",
];

function Footer() {
  return (
    <div className="px-52 py-7 bg-gray-100">
      <div className="d-flex items-start justify-between">
        <div>
          <div>
            <Image alt="" src={Logo} />
            <p className="max-w-96 mt-2">
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
          </div>
          <div className="flex gap-3  max-w-96 items-center mt-2">
            <div>
              <Image alt="" src={LocationIcon} width={30} height={30} />
            </div>
            <p>151 Hồ Nguyên Trừng, Khuê Trung, Cẩm Lệ, TP Đà Nẵng</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <div>
              <Image alt="" src={EmailIcon} width={30} height={30} />
            </div>
            <p>buichau40@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <div>
              <Image alt="" src={PhoneIcon} width={30} height={30} />
            </div>
            <p>+84 362091690</p>
          </div>
        </div>
        <div className="d-flex flex-col">
          <h1 className="font-bold text-xl">Category</h1>
          {categoryList.map((item, index) => (
            <Link
              className="max-w-96 mt-2 text-gray-500 hover:text-red-500"
              href={"/"}
              key={index}
            >
              {item}
            </Link>
          ))}
        </div>
        <div>
          <p className="font-bold text-xl">Subscribe Our Newsletter</p>
          <div className="relative mt-3">
            <input
              type="text"
              className="p-3 rounded-md w-96"
              placeholder="Search here..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
          <div className="flex gap-2 mt-4 drop-shadow">
            <div>
              <Link href={"https://www.facebook.com/mi.bui.923"}>
                <div className="bg-white rounded-xl p-2 h-10 w-10">
                  <Image alt="" src={FacebookIcon} height={50} width={50} />
                </div>
              </Link>
            </div>
            <div>
              <Link href={"https://twitter.com/chaubui627102"}>
                <div className="bg-white rounded-xl p-2 h-10 w-10">
                  <Image alt="" src={TwitterIcon} height={50} width={50} />
                </div>
              </Link>
            </div>
            <div>
              <Link href={"https://www.instagram.com/colabbui/"}>
                <div className="bg-white rounded-xl p-2 h-10 w-10">
                  <Image alt="" src={InstagramIcon} height={50} width={50} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        © 2024 ColabBui, All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
