"use client";

import { useEffect } from "react";

function UseTitle(title: string) {
  useEffect(() => {
    document.title = `Food | ${title}`;
  }, []);
}

export default UseTitle;
