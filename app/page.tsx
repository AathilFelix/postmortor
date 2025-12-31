"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

async function generate() {
  await fetch("/api/generate-postmortem", {
    method: "POST",
  });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <Header onGenerate={generate} />
      </div>
    </div>
  );
}
