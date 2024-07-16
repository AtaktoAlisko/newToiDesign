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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-3/4 w-3/4 bg-white p-5 opacity-75">
          <div className="text-center">
            <p className="mb-20 text-xl font-bold">Үйлену тойға шақыру</p>
            <p className="mt-4 text-4xl font-extrabold">Абылай </p>
            <p className="mt-4 text-4xl font-extrabold"> & </p>
            <p className="mt-4 text-4xl font-extrabold"> Ботакөз</p>
            <p className="mt-2 text-lg font-light">wedding</p>
            <button
              onClick={play}
              className="mt-4 rounded-full bg-black px-4 py-2 text-white"
            >
              {isPlaying ? "pause" : "play"}
            </button>
            <div className="top-5 mt-[50px] flex w-full flex-col items-center text-center">
              <div className="relative mb-2 mt-3 flex items-center justify-center">
                <Image
                  src="/mus-bg.png"
                  alt="music"
                  width={140}
                  height={140}
                  priority
                  className="animate-spin-slow sm:h-48 sm:w-48"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
