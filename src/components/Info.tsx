"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import insta from "../../public/insta.png";

export default function Info() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-08-09`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        data-aos="fade-up"
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />
      <div data-aos="fade-up" className="my-4 font-xxx text-3xl text-[#846718]">
        Мекен-жайымыз:
      </div>
      <div
        data-aos="fade-up"
        className="mb-12 text-center font-georgia text-[22px] uppercase leading-relaxed"
      >
        Тараз қаласы, <br /> &quot;Arman Hall  &quot; <br /> мейрамханасы
      </div>
      <div
        data-aos="fade-up"
        className="mb-4 text-center font-georgia text-[19px] uppercase leading-relaxed"
      >
        Сізге жетуге ыңғайлы <br /> болу үшін картаны басыңыз!
      </div>
      <div className="flex gap-10 ml-10">
        <a href="https://2gis.kz/taraz/firm/70000001053437946">
          <Image
            data-aos="fade-up"
            src="/2gis.jpeg"
            alt="2gis"
            width={60}
            height={60}
            className="mb-12 rounded-2xl"
          />
        </a>
        <a href="https://www.instagram.com/arman_hall_taraz/">
          <Image
            data-aos="fade-up"
            src={insta}
            alt="insta"
            width={130}
            height={130}
            className="mb-12 mt-[-13px] rounded-2xl"
          />
        </a>
      </div>
      <div data-aos="fade-up" className="mb-4 font-xxx text-3xl text-[#846718]">
        Той иелері:
      </div>
      <div
        data-aos="fade-up"
        className="mb-2 font-xxx text-[30px] text-[#000000]"
      >
        Абен - Кульпан
      </div>
      <Image
        data-aos="fade-up"
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />
     
      
      <div className="relative flex h-[70vh] w-full justify-center bg-[url('/shanyraq.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center pt-20 text-center">
          <div className="mb-6 font-xxx text-2xl text-[#cb9e44] drop-shadow-md">
            Той салтанатына дейін:
          </div>
          <div className="flex space-x-10 font-georgia text-[#FFFFFF] drop-shadow-md">
            <div className="flex flex-col items-center">
              <div className="text-4xl drop-shadow-md">{timeLeft.days}</div>
              <div className="text-md text-[#FCF7F7] drop-shadow-md">күн</div>
            </div>
            <div className="flex flex-col items-center font-georgia">
              <div className="text-4xl drop-shadow-md">{timeLeft.hours}</div>
              <div className="text-md text-[#FCF7F7] drop-shadow-md">сағат</div>
            </div>
            <div className="flex flex-col items-center font-georgia">
              <div className="text-4xl drop-shadow-md">{timeLeft.minutes}</div>
              <div className="text-md text-[#FCF7F7] drop-shadow-md">минут</div>
            </div>
            <div className="flex flex-col items-center font-georgia">
              <div className="text-4xl drop-shadow-md">{timeLeft.seconds}</div>
              <div className="text-md text-[#FCF7F7] drop-shadow-md">
                секунд
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-[190deg]"
      />
    </div>
  );
}
