import { StaticImageData } from "next/image";
import Image from "next/image";

interface Iprops {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function ProductRow({ image, name, price, quantity }: Iprops) {
  return (
    <div className="flex gap-5 mt-5">
      <Image
        alt=""
        src={image}
        height={100}
        width={100}
        className="object-cover"
      />
      <div className="flex flex-col">
        <p className="text-xl">{name}</p>
        <p className="mt-3 text-xl">Quantity: {quantity}</p>
        <p className="text-green-500 text-xl font-bold mt-3">{price} d</p>
      </div>
    </div>
  );
}

export default ProductRow;
