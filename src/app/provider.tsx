"use client";

import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={makeStore()}>{children}</Provider>;
}
