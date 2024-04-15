"use client";

import Input from "../Input";
import Button from "@mui/material/Button";

export default function SearchInput() {
  return (
    <div className="ml-28">
      <form action="" className="flex">
        <Input />
        <Button className="text-gray-950">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
}
