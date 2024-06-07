'use client';

import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Github from "@/app/components/Github"
export default function Home() {
  const router = useRouter(); // Use useRouter hook to get the router object

  return (
    <div>
      <div className="grid-row" style={{ backgroundColor: '#302e2b' }}>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full shadow-lg overflow-hidden"
        >
          <div className="w-full sm:w-1/2 flex justify-center p-5 lg:p-8">
            <Image
              src="/chess2.jpg"
              alt="Chess Game"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Play Your Ultimate Game</h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Chess</h1>
            <p className="text-white mb-8">
              Join our online chess platform,
              challenge players from around the world and
              mastering the timeless game of chess.
              Learn the basics if you're beginner.
              Experienced player aiming to sharpen your skills.</p>
            <Button onClick={() => router.push("/login")}>
              Play Online
            </Button>
          </div>
        </div>
        <div className="w-parent flex justify-center items-center my-8 p-10 rounded-full" >
          <Github />
        </div>
      </div>
    </div>
  );
}
