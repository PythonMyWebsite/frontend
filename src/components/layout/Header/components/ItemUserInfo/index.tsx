"use client";

import Link from "next/link";

interface ItemInfo {
  url: string;
  name: string;
  icon: JSX.Element;
}

export default function ItemUserInfo({ url, name, icon }: Readonly<ItemInfo>) {
  return (
    <div>
      <Link
        className="flex gap-2 items-center cursor-pointer font-bold"
        href={url}
      >
        {icon}
        <span>{name}</span>
      </Link>
    </div>
  );
}
