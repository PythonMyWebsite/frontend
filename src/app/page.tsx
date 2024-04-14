"use client";

import Header from "@/components/layout/Header";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/category/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
    </main>
  );
}
