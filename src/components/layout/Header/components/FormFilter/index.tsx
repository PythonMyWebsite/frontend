import Image from "next/image";
import SearchInput from "../SearchInput";

export default function FormFilter() {
  return (
    <div className="bg-white">
      <Image
        src="/logo.png"
        alt="search"
        width={200}
        height={80}
        className="object-cover"
      />
      <SearchInput />
    </div>
  );
}
