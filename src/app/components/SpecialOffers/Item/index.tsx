import { StaticImageData } from "next/image";
import Image from "next/image";

interface IProps {
  icon: StaticImageData;
  name: string;
  description: string;
}

function Item({ icon, name, description }: IProps) {
  return (
    <div className="px-5 flex gap-2 items-center bg-emerald-100 rounded-xl hover:bg-emerald-200">
      <Image alt="" src={icon} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Item;
