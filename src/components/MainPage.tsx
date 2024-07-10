"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import main from "../../public/main.jpg";

const music = "/music/music.mp3";

export default function MainPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(music);
  }, []);

  const play = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-[url('/main-bg.jpeg')] bg-cover bg-center bg-no-repeat font-xxx">
      <div className="absolute top-10 flex w-full flex-col items-center text-center">
        <h1>Үйлену тойына шақыру</h1>
        <Image src={main} alt="main" width={270} height={270} />

        <div className="relative mb-2 mt-3 flex items-center justify-center">
          <Image
            src="/mus-bg.png"
            alt="music"
            width={140}
            height={140}
            priority
            className="animate-spin-slow"
          />
          <button
            onClick={play}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/mus.webp"
              alt="music"
              width={80}
              height={80}
              className={`${isPlaying ? "animate-spin-slowly" : ""}`}
            />
          </button>
        </div>

        <div className="flex flex-col">
          <h1 className="ml-[-100px] text-4xl">Абылай</h1>
          <h1 className="text-3xl">&</h1>
          <h1 className="ml-[100px] text-4xl">Ботакөз
          </h1>
          <p className="mt-3 text-2xl">09/08/2024</p>
        </div>
      </div>
    </div>
  );
}
