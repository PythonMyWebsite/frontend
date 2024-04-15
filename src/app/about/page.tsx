"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useTitle } from "@/lib/hooks";
import VegetableImg from "../../../public/about1.png";
import Image from "next/image";

const introducelist = [
  {
    title: "Product Packing",
    description:
      "Đóng gói sản phẩm: Bảo vệ hàng hóa của bạn an toàn và chắc chắn trong quá trình vận chuyển.",
  },
  {
    title: "24X7 Support",
    description:
      "Hỗ trợ 24/7: Chúng tôi luôn sẵn lòng hỗ trợ bạn mọi lúc, mọi nơi, 24 giờ mỗi ngày, 7 ngày mỗi tuần",
  },
  {
    title: "Delivery in 5 Days",
    description:
      "Giao hàng trong vòng 5 ngày: Chúng tôi cam kết giao hàng nhanh chóng, đảm bảo bạn nhận được đơn hàng trong vòng 5 ngày kể từ khi đặt hàng.",
  },
  {
    title: "Payment Secure",
    description:
      "Thanh toán an toàn: Chúng tôi đảm bảo việc thanh toán của bạn được thực hiện một cách an toàn và bảo mật, giúp bạn yên tâm khi mua sắm trực tuyến.",
  },
];

function About() {
  useTitle("About");

  return (
    <div>
      <Header />
      <div className="mx-52 mt-20">
        <div className="flex gap-7">
          <div className="flex flex-col justify-between w-1/2">
            <div>
              <h1 className="font-bold text-2xl">About The Carrot</h1>
              <p className="text-gray-500 mt-3">
                Carrot là một cửa hàng thực phẩm chuyên cung cấp các loại rau củ
                sạch và sản phẩm liên quan tại địa phương. Chúng tôi cam kết
                mang đến cho khách hàng những sản phẩm chất lượng cao, được thu
                hoạch từ các nguồn nguyên liệu tự nhiên và bền vững.
              </p>
              <p className="text-gray-500 mt-3">
                Với đội ngũ nhân viên giàu kinh nghiệm và niềm đam mê trong
                ngành nông nghiệp, chúng tôi luôn tự hào về việc cung cấp những
                sản phẩm tươi ngon nhất từ trang trại đến tay người tiêu dùng.
              </p>
              <p className="text-gray-500 mt-3">
                Hãy đến với chung toi để trải nghiệm sự tươi mới và nguồn dinh
                dưỡng tự nhiên từ những sản phẩm của chúng tôi.
              </p>
            </div>
            <div className="flex gap-2 bg-gray-300 rounded-lg py-10 drop-shadow-lg">
              <div className="w-1/3 flex flex-col items-center">
                <p className="font-bold text-red-500 text-4xl">20</p>
                <p>Vendors</p>
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <p className="font-bold text-red-500 text-4xl">40</p>
                <p>Products</p>
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <p className="font-bold text-red-500 text-4xl">10</p>
                <p>Customers</p>
              </div>
            </div>
          </div>
          <Image
            alt="vegetable"
            src={VegetableImg}
            className="rounded-xl w-1/2"
          />
        </div>
        <div className="flex gap-3 my-20">
          {introducelist.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col w-1/4 p-6 hover:bg-slate-300  bg-gray-300 rounded-lg`}
              >
                <p className="text-center font-bold text-xl">{item.title}</p>
                <p className="text-center text-gray-500 mt-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
