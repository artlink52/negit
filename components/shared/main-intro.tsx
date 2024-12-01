"use client";
import React from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export const MainIntro: React.FC = () => {
  return (
    <div className="relative pb-16">
      {/* Фоновое изображение с фиксированием */}
      <div
        className="fixed top-0 left-0 w-screen h-screen -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(/negit/assets/bg-main.jpg)`,
        }}
        // style={{ backgroundImage: "url('/assets/bg-main.jpg')" }}
      ></div>

      {/* Затемнение фона */}
      <div className="absolute inset-0 w-full h-full bg-[#0F172A] opacity-70"></div>

      <Container>
        {/* Контент с анимацией */}
        <div className="relative h-full flex flex-col lg:flex-row items-start justify-between lg:space-x-8 fade-in-up">
          {/* Левая часть с текстом */}
          <div className="text-white mt-[55px] text-left w-full lg:w-[60%]">
            <h1 className="h1-font leading-tight lg:font-bold font-medium">
              «НордЭнергоГрупп Информационные Технологии» – Ваш надежный партнер
              в{" "}
              <span className="text-[#F97316]">
                цифровизации проектирования и производства
              </span>
            </h1>
            <p className="text-[#E0E0E0] p-font mt-[25px] lg:mt-[35px]">
              Инновационные решения для 10 предприятий по всей России
            </p>
            <Button
              onClick={() => {
                const mainAbout = document.getElementById("mainAbout");
                mainAbout?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-[25px] lg:mt-[35px]"
              variant="default"
            >
              Узнать больше
            </Button>
          </div>

          {/* Правая часть с картинкой */}
          <div className="h-full lg:h-full w-full lg:w-[40%] mt-8 lg:mt-0"></div>
        </div>
      </Container>

      {/* Стрелка вниз */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDownIcon className="h-8 w-8 text-white animate-bounce" />
      </div> */}
    </div>
  );
};
